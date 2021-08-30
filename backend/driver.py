'''
This is the driver code for 
the flask server for SM simulator
'''

#--imports--
from flask import Flask, render_template, request, redirect, url_for, jsonify
import sqlite3
from flask_cors import CORS, cross_origin
import urls

from facebook_ad_campaign.presentation import get_preds



''' Configuring the Flask Serve '''
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def hello():

    ''' TestPage/Homepage '''

    return "hello world"





@app.route(urls.ADD_PROJECT_URL, methods = ["POST", "GET"])
def addNewProject():
    
    ''' Function to send new project data into the Database '''

    data = request.get_json()
    print(data["name"])

    con = sqlite3.connect("sm.db")  
    cur = con.cursor()  

    cur.execute("INSERT INTO project (name) values (?)", (data["name"], ))

    con.commit()
    con.close()

    return url_for('sendProjects')





@app.route(urls.DELETE_PROJECT_URL, methods = ["GET", "POST"])
def deleteProject():
    
    ''' Function to delete a specific Project '''

    data = request.get_json()

    con = sqlite3.connect("sm.db")
    cur = con.cursor()

    cur.execute("DELETE FROM canvas_links where proj_id = ?", (data["id"], ))
    cur.execute("DELETE FROM canvas_nodes where proj_id = ?", (data["id"], ))
    cur.execute("DELETE FROM elem where proj_id = ?", (data["id"], ))
    cur.execute("DELETE FROM project where id = ?", (data["id"], ))

    con.commit()
    con.close()

    return url_for('sendProjects')





@app.route(urls.EDIT_PROJECT_URL,methods = ["GET", "POST"])
def editProject():

    ''' Function to edit a Project Name '''

    data = request.get_json()

    con = sqlite3.connect("sm.db")
    cur = con.cursor()

    cur.execute("UPDATE project set name = ? where id = ?", (data["name"], data["id"]))

    con.commit()
    con.close()

    return url_for("sendProjects")





@app.route(urls.SEND_PROJECT_URL)
def sendProjects():
    
    ''' Function to send list of projects to the frontend '''

    con = sqlite3.connect("sm.db")  
    con.row_factory = sqlite3.Row  
    cur = con.cursor() 

    cur.execute("select * from project")  

    rows = cur.fetchall()
    con.close()

    res = []
    for data in list(rows):
        data = list(data)
        temp = {}
        temp["id"] = data[0]
        temp["name"] = data[1]
        res.append(temp)

    return {"data":res}





@app.route(urls.SEND_TEMPLATES_URL)
def sendTemplates():

    ''' Function to send List of Templates to the frontend '''

    con = sqlite3.connect("sm.db")  
    con.row_factory = sqlite3.Row  
    cur = con.cursor()

    cur.execute("select * from templates")  

    rows = cur.fetchall()
    con.close()

    res = []
    for data in list(rows):
        data = list(data)
        temp = {}
        temp["id"] = data[0]
        temp["name"] = data[1]
        temp["url"] = data[2]
        temp["type"] = data[3]
        res.append(temp)

    return {"data":res}





@app.route(urls.SAVE_TEMPLATES_URL, methods = ["POST", "GET"] )
def saveTemplate():
    
    ''' Save newly created templates in the DB. '''

    data = request.get_json()
    
    try:
    
        name = data["name"]
        url = data["url"]
        typ = data["type"]
        nodes = data["nodes"]
        links = data["links"]

        with sqlite3.connect("sm.db") as con:
            cur = con.cursor()

            cur.execute("INSERT INTO templates (name, path, type) values (?, ?, ?)", (name, url, typ))
            
            con.commit()
            
            cur.execute("SELECT id from templates where name = ?", (name,))
            
            idd = cur.fetchone()[0]
            
            for node in nodes:
                cur.execute("INSERT INTO template_nodes (temp_id, name, url, key, hash) values (?, ?, ?, ?, ?)", (idd, node["elemName"], node["elem"], node["key"], node["__gohashid"]))
            
            for link in links:
                cur.execute("INSERT INTO template_links (temp_id, A, B, key) values (?, ?, ?, ?)", (idd, link["from"], link["to"], link["key"]))
            
            con.commit()
    
    except:
        con.rollback()
    
    finally:
        con.close()
    
    return url_for('sendTemplates')





@app.route(urls.SEND_TEMPLATE_DATA_URL, methods = ["GET", "POST"])
def sendTemplateData1(tid):
    
    ''' Send a Specific template data to the frontend. '''

    con = sqlite3.connect("sm.db")
    con.row_factory = sqlite3.Row
    cur = con.cursor()

    cur.execute("select * from template_links where temp_id = ?", (tid,) )
    
    link_rows = cur.fetchall()
    link_res = []

    for data in list(link_rows):
        data = list(data)
        temp = {}
        temp['from'] = data[1]
        temp['to'] = data[2]
        temp['key'] = data[3]
        temp['fromPort'] = ''
        temp['toPort'] = ''
        link_res.append(temp)

    cur.execute("select * from template_nodes where temp_id = ?", (tid,) )
    
    node_rows = cur.fetchall()
    node_res = []
    
    for data in list(node_rows):
        data = list(data)
        temp = {}
        temp['elemName'] = data[1]
        temp['elem'] = data[2]
        temp['key'] = data[3]
        node_res.append(temp)

    return {"nodes": node_res, "links": link_res}





@app.route(urls.SAVE_CANVAS_URL, methods = ["POST", "GET"]) 
def saveCanvas():
    
    ''' It receives the components and links present  
        on the canvas and save it inside the DB.
    '''

    data = request.get_json()
    nodes = data["nodes"]
    links = data["links"]
    proj_id = data["proj_id"]

    with sqlite3.connect("sm.db") as con:
        cur = con.cursor()

        cur.execute("DELETE FROM canvas_nodes where proj_id = ?", (proj_id, ))
        
        for node in nodes: 
            cur.execute("INSERT INTO canvas_nodes (proj_id, name, url, key, hash) values (?, ?, ?, ?, ?)", (proj_id, node["elemName"], node["elem"], node["key"], node["__gohashid"]))
        
        con.commit()

    with sqlite3.connect("sm.db") as con:
        cur = con.cursor()
        
        cur.execute("DELETE FROM canvas_links where proj_id = ?", (proj_id, ))
        
        for link in links:
            cur.execute("INSERT INTO canvas_links (proj_id, A, B, key) values (?, ?, ?, ?)", (proj_id, link["from"], link["to"], link["key"]))
        
        con.commit()

    return "ok"





@app.route(urls.SEND_CANVAS_URL)
def sendCanvas(proj_id):
    
    ''' Sends specific Canvas nodes and links based on their ids. '''

    con = sqlite3.connect("sm.db")  
    con.row_factory = sqlite3.Row  
    cur = con.cursor()

    cur.execute("select * from canvas_links where proj_id = ?", (int(proj_id),))  
    
    link_rows = cur.fetchall()
    link_res = []
    
    for data in list(link_rows):
        data = list(data)
        temp = {}
        temp['from'] = data[1]
        temp['to'] = data[2]
        temp['key'] = data[3]
        temp['fromPort'] = ''
        temp['toPort'] = ''
        link_res.append(temp)


    cur.execute("select * from canvas_nodes where proj_id = ?", (int(proj_id),))  
    
    node_rows = cur.fetchall()
    node_res = []
    
    for data in list(node_rows):
        data = list(data)
        temp = {}
        temp['elemName'] = data[1]
        temp['elem'] = data[2]
        temp['key'] = data[3]
        temp['__gohashid'] = data[4]
        node_res.append(temp)
    
    return {"nodes": node_res, "links": link_res}





@app.route(urls.SAVE_ELEM_URL, methods = ["POST", "GET"])
def saveElem():
    
    '''
    It receives the new element data from 
    the angular server and saves it inside the database
    '''

    data = request.get_json()
    
    try:

        name = data["elemName"]
        url = data["elem"]
        proj_id = data["proj_id"]

        with sqlite3.connect("sm.db") as con:
            cur = con.cursor()

            cur.execute("INSERT INTO elem (proj_id, name, url) values (?, ?, ?)",
             (proj_id, name, url))

            con.commit()
    
    except:
        con.rollback()
    
    finally:
        con.close()
    
    return "ok"





@app.route(urls.SEND_ELEM_URL)
def sendElem(proj_id):
    '''
    The function sends palette elements
    to the angular server from the database
    in JSON format
    '''
    con = sqlite3.connect("sm.db")  
    con.row_factory = sqlite3.Row  
    cur = con.cursor()  

    cur.execute("select name, url from elem where proj_id = 0 or proj_id = ?",
     (int(proj_id),))  

    rows = cur.fetchall()
    name = list(dict(rows).keys())
    url = list(dict(rows).values())

    res = []
    for i in range(len(name)):
        temp = {}
        temp["key"] = i+1
        temp["elem"] = url[i]
        temp["elemName"] = name[i]
        res.append(temp)

    return {"data":res}

@app.route(urls.SAVE_PROCESSING_DATA, methods = ['POST', 'GET'])
def saveProcessingData():

    data = request.get_json()

    try:

        name = data["name"]
        proj_id = data["proj_id"]
        age_group = data["age_group"]
        gender = data["gender"]
        budget = data["budget"]

        with sqlite3.connect("sm.db") as con:
            cur = con.cursor()
            cur.execute("DELETE FROM processing_data where proj_id=? and name=?", (proj_id,name))
            cur.execute("INSERT INTO processing_data (proj_id, name, age_group, gender, budget) values (?, ?, ?, ?, ?)",
             (proj_id, name, age_group, gender, budget))

            con.commit()
    
    except:
        con.rollback()
    
    finally:
        con.close()
    
    return "ok"


@app.route(urls.SEND_PROCESSED_DATA)
def sendProcessingData(proj_id):
    '''

    '''
    con = sqlite3.connect("sm.db")  
    con.row_factory = sqlite3.Row  
    cur = con.cursor()  

    cur.execute("select age_group, gender, budget from processing_data where proj_id = ?",
     (int(proj_id),))  

    
    data_rows = cur.fetchall()
    data_res = []
    temp = {'age_group':[], 'gender':[], 'budget':[]}

    total_impressions = 0
    total_clicks = 0
    total_conversion = 0

    for data in list(data_rows):
        data = list(data)
        impressions, clicks, conversion = get_preds(data[2], data[0], data[1])
        total_impressions += impressions
        total_clicks += clicks
        total_conversion += conversion
        # temp['age_group'].append(data[0])
        # temp['gender'].append(data[1])
        # temp['budget'].append(data[2])
    
    # final_budget = sum(temp['budget'])
    # final_gender = 'all'
    # final_age_group = 'all'

    # impressions, clicks = get_preds(final_budget, final_age_group, final_gender)

    
    return {"data": [{'impressions': total_impressions, 'clicks': total_clicks, 'conversion':total_conversion }]}


if __name__ == "__main__":
    ''' App server running on port 8000 '''
    
    app.run(port=8000)
