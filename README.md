# Firex Lab

The Firex Lab (literally standing for Firebase Experimental Lab) is a set of tools meant to make life a bit easier for anyone who is using firebase in his/her projects. As of right now, there is only a tool for the Firebase Realtime Database but there are plans to add tools that make using other services easier as well.

## Realtime Database Editor

The inspiration for this project came from the default editor that firebase provides for its Realtime Database which is kinda dreadful. Creating new nodes at scale in the editor can be really annoying since you have to add each key-value pair manually and the editor can even feel slightly unresponsive at times. So to fix that, we at **onCreators** have come up with a JSON-style editor for the realtime database, one where you can make large updates on the fly. 

To use it, simply go to https://firex-lab.netlify.com and on the top-right corner, click on "Add Project", then enter in your firebase project's name (a.k.a projectId), appId and apiKey into the form. The values can be taken from your firebase configuration like so :-

![config](https://github.com/AkhileshNS/firex-lab/blob/master/docs/config.png)

P.S: You'll need to register a new web app on your firebase console before you receive his configuration.

Once you have successfully added a project, you can start using the tool. In the input box, enter the path to any node in your firebase realtime database as you would write them to receive data using firebase.database().ref(path). (For example: "/" will get you all the data in your realtime database and "/users" would get you all the data at the users node in your realtime database).

After entering in the path, press "Get Data" and you should see a json representation of your data, feel free to edit this data and then press "Set Data", this will then set the altered data to the realtime database

![using firex-lab part 1](https://github.com/AkhileshNS/firex-lab/blob/master/docs/how%20to%20use%20firex-lab%20part%201.gif)

![using firex-lab part 2](https://github.com/AkhileshNS/firex-lab/blob/master/docs/how%20to%20use%20firex-lab%20part%202.gif)

![using firex-lab part 3](https://github.com/AkhileshNS/firex-lab/blob/master/docs/how%20to%20use%20firex-lab%20part%203.gif)

Note. Adding the project once will store it in IndexedDB until you change to a different project so you don't have to keep re-entering this over and over again. 

## License

This tool is licensed under the MIT License - check the [LICENSE](https://github.com/AkhileshNS/firex-lab/blob/master/LICENSE) file for more details.

We encourage you to change and alter the tool for your needs
