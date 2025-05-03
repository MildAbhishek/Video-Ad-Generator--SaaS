export const GENERATE_SCRIPT_PROMPT=`Topic:{topic}
Depends on user topic, generate 3 different video script for 30 seconds video for user in jSON format.
Providing you the schema given below and return only three object in an array having only two fields: scriptId and content.
Schema:[
{
scriptId:''
content:''
},
...
]
`