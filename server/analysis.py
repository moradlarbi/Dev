import pandas as pd
import re

posts = ['tweet1' , 'twee2' , 'tweet'] 
for tweet in posts:
    print(tweet)

#Create a data frame
df = pd.DataFrame( [tweet for tweet in posts] , columns=['Tweets'])

#show the 5 first of data
df.head()

#Clean the text
def cleanTxt(text):
    text = re.sub(r'@[A-Za-z0-9]+', '', text) #Removed @mentions
    text = re.sub(r'#', '', text) #Removed # symboles
    return text

#Cleaning the text
df['Tweets']= df['Tweets'].apply(cleanTxt)

#show the clean text
df


    