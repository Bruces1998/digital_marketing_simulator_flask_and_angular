import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

def get_preds(budget, age, gender):
    data = pd.read_csv('marketing_data.csv')

    if age != '--All--':
        data = data[data['age'] == age]
        
    if gender != 'all':
        data = data[data['gender'] == gender]

    data = data.drop(['age', 'gender', 'Unnamed: 0'], axis = 1)
    X = data.drop(['approved_conversion', 'total_conversion', 'clicks', 'impressions'],axis=1)
    y1 = data['clicks']
    y2 = data['impressions']
    y3 = data['approved_conversion']

    # scaler = StandardScaler()
    # scaled_data = scaler.fit_transform(X)
    # scaled_d = scaler.fit_transform(data)

    # X_train, X_test, y1_train, y1_test = train_test_split(X,y1, test_size = 0.4, random_state=101)
    # X_train, X_test, y2_train, y2_test = train_test_split(X,y2, test_size = 0.4, random_state=101)

    lm1 = LinearRegression()
    lm1.fit(X,y1)

    lm2 = LinearRegression()
    lm2.fit(X,y2)

    lm3 = LinearRegression()
    lm3.fit(X,y3)

    # predi1 = lm1.predict(X_test)
    # predi2 = lm2.predict(X_test)
    check = np.asarray([[budget]])

    return (int(lm2.predict(check)[0]), int(lm1.predict(check)[0]), int(lm3.predict(check)[0]))
    
# age = input('Age Group: ')
# gender =  input('Gender: ')
# a = int(input("Enter your budget in $:"))
# get_preds(a, age, gender)

