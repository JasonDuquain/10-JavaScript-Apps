//// Variables
const tweetList = document.querySelector('#tweet-list');


//// Event Listeners
eventListeners();

function eventListeners() {
    /// Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);
    
    /// Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);
    
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


///// Functions

function newTweet(e) {
    e.preventDefault();
    
    /// Read the textarea value
    const tweet = document.querySelector('#tweet').value;
    document.querySelector('#tweet').value = ''
    document.querySelector('#tweet').focus();
    
    /// Create the remove btn
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
    
    /// Create an LI element
    let li = document.createElement('li');
    li.textContent = tweet;
    li.append(removeBtn);
    tweetList.append(li);
    
    /// Add to local storage
    addTweetLocalStorage(tweet);
    
    // Print the alert
    
    
}

/// Remove the tweets from the DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentNode.remove();
    } 

    
    /// Remove from storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
}

/// Adds the tweets into the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();
    
    /// Add the tweets into the arr
    tweets.push(tweet);
    
    /// Convert arr to stg
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    
    // Get the values, if null is returned we create an empty arr
    tweets = (tweetsLS === null) ? [] : JSON.parse(tweetsLS);

    return tweets;
}

/// Prints local storage tweets on load
function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();
    
    /// Loop thru storage and then print the values
    tweets.forEach(function(tweet) {
        
        /// Create the remove btn
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        /// Create an LI element
        let li = document.createElement('li');
        li.textContent = tweet;

        /// Add the remove btn to each tweet
        li.append(removeBtn);

        /// Add to the list
        tweetList.append(li);

    });
}

function removeTweetLocalStorage(tweet) {   
    //get Tweets from storage
    let tweets = getTweetsFromStorage();
   
    // Remove the 'X' from the tweets
    let tweetDelete = tweet.slice(0, tweet.length -1);
    
    /// Look thru the tweets and remove the tweet thats equal
    tweets.forEach(function(tweetLS, index) {
       if (tweetDelete === tweetLS) {
           tweets.splice(index, 1);
       } 
    });
    
    // Save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));
}






