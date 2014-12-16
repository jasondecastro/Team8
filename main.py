from flask import Flask
from flask import request
from flask import url_for, redirect,render_template, session
import twilio
import twilio.rest
from wtforms import Form,TextField

class Phone(Form):
    number = TextField()

app = Flask(__name__)

@app.route('/', methods=['POST','GET'])
def frontPage():
   form = Phone(request.form)
   if request.method == 'POST':
       welcome()
   return render_template('start-page.html', form=form)

@app.route('/game.html', methods=['POST','GET'])
def welcome():
    if 'e' == 'e':
      try:
        account_sid = "AC499b0b2477461f0b417fd79f0cc0a9b3"
        auth_token = "1a1f186e149af311706de4701b0e96a3"
        form = Phone(request.form)
        client = twilio.rest.TwilioRestClient(account_sid, auth_token)
        phoneNumber = str(form.number.data)
        message = client.messages.create(
            body="Welcome to Santa's Rainbow Run!",
            to="+1"+phoneNumber,
            from_="+16463623998"
        )
      except twilio.rest.exceptions.TwilioRestException:
            return render_template("game.html", form=form)
    return render_template("game.html", form=form)


if __name__=="__main__":
  app.run(host='104.236.116.50', port=80, debug=True)
