from matplotlib import colors
import pandas as pd 
import numpy as np
import re
import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')
from wordcloud import WordCloud


file = pd.read_csv("covid19_tweets.csv")

df = pd.DataFrame(file)
tweet = df['text'].values
date = df['date'].values
print(df.columns)
print('\n'+df['text'])
#tweet_created = df.iloc[:,['date']]

#df = pd.DataFrame(np.array([[tweet for tweet in df['text']],[date for date in df['date']]]), columns=['Tweets', 'When'])
#df = pd.DataFrame(np.array([df['text'],df['date']]), columns=['Tweets', 'When'])
df = pd.DataFrame([tweet for tweet in df['text']], columns=['Tweets'])


df1 = pd.DataFrame()
df1['Tweets']=tweet
df1['dates']=date
df = df1


#df = pd.DataFrame([tweet_created for tweet_created in df['date']], columns=['When'])
#print(df.columns)
#print(df.head)
#########


#for tweet in posts:
 #   print(tweet)

#Create a data frame
#df = pd.DataFrame( [tweet for tweet in posts] , columns=['Tweets'])

#show the 5 first of data
print(df)
#Clean the text
def cleanTxt(text):
    text = re.sub(r'@[A-Za-z0-9]+', '', text) #Removed @mentions
    text = re.sub(r'#', '', text) #Removed # symboles
    return text

#Cleaning the text
df['Tweets']= df['Tweets'].apply(cleanTxt)

#show the clean text
print("########\n")
print(df)
print("########\n")
#print(df.head())

#Create a function to get the subjuctivity
from textblob import TextBlob
def getSubjectivity(text):
    return TextBlob(text).sentiment.subjectivity

#Create a function to get the polarity
def getPolarity(text):
    return TextBlob(text).sentiment.polarity

#Create two new columns
df['Subjectivity'] = df['Tweets'].apply(getSubjectivity)
df['Polarity'] = df['Tweets'].apply(getPolarity)
#df['tweet_created'] = df['Tweets'].apply(getPolarity)

#Show the new dataframe with the new columns
print(df)

#Plot all the word cloud
allWords = ' '.join( [twts for twts in df['Tweets']] )
wordCloud = WordCloud(width = 500, height=300, random_state=21, max_font_size=119).generate(allWords)

plt.imshow(wordCloud, interpolation = 'bilinear')
plt.axis('off')
plt.show()

#Create a function to compute the negative, neutral and the positive analysis
def getAnalysis(score):
    if score <0:
        return 'Negative'
    elif score == 0:
        return 'Neutral'
    else:
        return'Positive'

df['Analysis'] = df['Polarity'].apply(getAnalysis)

#show the dataframe
print(df)

#Print all of the positive tweets
# j = 1
# sortedDF = df.sort_values(by=['Polarity'])
# for i in range(0, sortedDF.shape[0]):
#    if (sortedDF['Analysis'][i] == 'Positive'):
#        print(str(j) + ') '+sortedDF['Tweets'][i])
#        print()
#        j = j+1
    
# #Print all of the negative tweets
j = 1
df = df.sort_values(by=['dates'], ascending='False')
# for i in range(0, sortedDF.shape[0]):
#    if (sortedDF['Analysis'][i] == 'Negative'):
#        print(str(j) + ') '+sortedDF['Tweets'][i])
#        print()
#        j = j+1

print('laa1\n')
#Plot the polarity and subjectivity
# plt.figure(figsize=(8,6))
# for i in range(0, df.shape[0]):
#    plt.scatter(df['Polarity'][i], df['Subjectivity'][i], color='Blue') 
#    print("j'aattends\n")

# plt.title('Sentiment Analysis')
# plt.xlabel('Polarity')
# plt.ylabel('Subjectivity')
# plt.show()

print('laa2\n')
#Get the pourcentage of positive tweets
ptweets = df[df.Analysis == 'Positive']
ptweets = ptweets['Tweets']

round( (ptweets.shape[0] / df.shape[0]) * 100 , 1 )

#Get the pourcentage of negative tweets
ntweets = df[df.Analysis == 'Negative']
ntweets = ntweets['Tweets']

round( (ntweets.shape[0] / df.shape[0]) * 100 , 1 )

# #Show the value counts
df['Analysis'].value_counts()

#plot and visualize the count
plt.title('Sentiment Analysis')
plt.xlabel('Sentiment')
plt.ylabel('Count')
df['Analysis'].value_counts().plot(kind='bar')
plt.show()

#stats
daystats = {}
total = [0,0,0,0,0,0,0]
taux = [0,0,0,0,0,0,0]
tauxgeneral=0
nbn = 0
nbp = 0
for polarity in df['Analysis']:
    tauxgeneral+=(1+polarity)*50
    if polarity>=0: nbp=nbp+1
    else: nbn = nbn+1
tauxgeneral = tauxgeneral / df.shape[0]
print(tauxgeneral)

exit()