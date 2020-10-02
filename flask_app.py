# import the Flask class from the flask module
from flask import Flask, render_template, request

# create the application object
app = Flask(__name__)

# use decorators to link the function to a url
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')  # render a template

@app.route('/policy',methods=['GET'])
def policy():
    if request.method == "GET":
        if not request.args.get('q'):
            return redirect('/')

        query = request.args.get('q')
        print(request.query_string)

        template_name = query+".html"
        return render_template(template_name)  # render a template


# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)
