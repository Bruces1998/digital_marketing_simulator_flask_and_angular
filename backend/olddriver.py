'''
This is the driver code for
the flask server for SM simulator
'''

#--imports--
from flask import Flask, render_template, request, redirect, url_for, jsonify
import sqlite3
from flask_cors import CORS
#--imports--

#--flask_server--
app = Flask(__name__)
CORS(app)
#--flask_server--

#--homepage--
@app.route("/")
def hello():
    return "hello world"
#--homepage--

#--Sending Canvas Angular -> DB
@app.route("/savecanvas/<pid>", methods = ["POST", "GET"])
def saveCanvas(pid):
    '''
    It receives the components and links present
    on the canvas and save it inside the DB
    '''
    data = request.get_json()
    print(data)

    nodes = data["nodes"]
    links = data["links"]

    with sqlite3.connect("sm.db") as con:
        cur = con.cursor()
        cur.execute("DELETE FROM canvas_nodes where proj_id = ?", (pid))
        print(len(nodes))
        for node in nodes:
            print(node)
            cur.execute("INSERT INTO canvas_nodes (proj_id, name, url, key) values (?, ?, ?, ?)", (pid, node["elemName"], node["elem"], node["key"]))
        con.commit()

    with sqlite3.connect("sm.db") as con:
        cur = con.cursor()
        cur.execute("DELETE FROM canvas_links where proj_id = ?", (pid))
        print(len(links))
        for link in links:
            cur.execute("INSERT INTO canvas_links (proj_id, A, B, key) values (?, ?, ?, ?)", (pid, link["from"], link["to"], link["key"]))
        con.commit()

    return "running"
#--Sending Canvas Angular -> DB

#--Sending Canvas DB -> Angular
@app.route("/sendcanvas/<pid>")
def sendCanvas(pid):
    '''
    It extracts canvas data for particular
    project from the DB and sends it to the
    angular project
    '''

    con = sqlite3.connect("sm.db")
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute("select * from canvas_links where proj_id = ?", (pid) )
    link_rows = cur.fetchall()
    link_res = []
    for data in list(link_rows):
        data = list(data)
        print(data)
        temp = {}
        temp['from'] = data[1]
        temp['to'] = data[2]
        temp['key'] = data[3]
        temp['fromPort'] = ''
        temp['toPort'] = ''
        link_res.append(temp)

    cur.execute("select * from canvas_nodes where proj_id = ?", (pid) )
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
#--Sending Canvas DB -> Angular

#--Sending newElement Angular -> DB
@app.route("/savedetails/<pid>", methods = ["POST", "GET"])
def saveDetails(pid):
    '''
    It receives the new element
    data from the angular server
    and saves it inside the database
    '''
    data = request.get_json()
    print(data)
    try:
        name = data["elemName"]
        url = data["elem"]
        with sqlite3.connect("sm.db") as con:
            cur = con.cursor()
            cur.execute("INSERT INTO elem (proj_id, name, url) values (?, ?, ?)", (pid, name, url))
            con.commit()
    except:
        con.rollback()
    finally:
        con.close()
    return "running"
#--Sending newElement Angular -> DB

#--Sending palette DB -> Angular
@app.route("/send/<pid>")
def sendDetails(pid):
    '''
    The function sends palette elements
    to the angular server from the database
    in JSON format
    '''
    con = sqlite3.connect("sm.db")
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute("select name, url from elem where proj_id = ?", (pid))
    rows = cur.fetchall()
    name = list(dict(rows).keys())
    url = list(dict(rows).values())
    con.commit()
    con.close()
    res = []
    for i in range(len(name)):
        temp = {}
        temp["key"] = i+1
        temp["elem"] = url[i]
        temp["elemName"] = name[i]
        res.append(temp)

    return {"data":res}


@app.route("/sendproject", methods = ["POST", "GET"])
def sendProjects():
    '''
    '''
    con = sqlite3.connect("sm.db")
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute("select * from project")
    rows = cur.fetchall()
    res = []
    for data in list(rows):
        data = list(data)
        temp = {}
        temp['id'] = data[0]
        temp['name'] = data[1]
        res.append(temp)


    return {"data":res}





if __name__ == "__main__":
    app.run(port=8000) #App server running on port 8000
