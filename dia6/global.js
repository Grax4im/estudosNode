//Using the global object

//freeze - torna os atributos imutáveis
global.MyApp =  Object.freeze({
    saudacao() {
        return "I'm everywhere"
    },
    ofensa: "fuck u"
})