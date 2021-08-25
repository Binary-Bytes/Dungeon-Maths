# Deploy to Heroku

First Open up Heroku.com and Sign Up or Sign In<br />

# Requirements

- Git
- Heroku CLI
- A Repo on GitHub

# Deployment

First go to <a href="heroku.com">Heroku</a> and Create a New App<br />
Then Start Typing These Commands in Your Terminal

```bash
heroku login
git init
heroku git:remote -a <Name by Which You Created Your Project on Heroku>

git add .
git commit -am "<Commit Name>"
git push heroku master
```

Yay !! You Deployed Your App/Game to Heroku<br />
Go to the URL :

```bash
https://<Your Heroku Project Name>.herokuapp.com/
```
