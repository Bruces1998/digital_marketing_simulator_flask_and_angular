import sqlite3

con = sqlite3.connect("sm.db")
cur = con.cursor()
print("[INFO] Database Connection Successful!")
n = "template 1"
cur.execute("select id from templates where name = ?",(n,))
name = cur.fetchone()[0]
print(name, type(name))
print("Table created successfully")

con.close()