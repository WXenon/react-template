import Translations from './Translations.json'

export const Localise = (lang)=>{
    if(lang === undefined){
        if(window.localStorage.siteLang.includes("en")){
            lang = "en"
        }
        if(window.localStorage.siteLang.includes("zh")){
            lang = "zh"
        }
        if(window.localStorage.siteLang.includes("ml")){
            lang = "zh"
        }
        if(window.localStorage.siteLang.includes("tm")){
            lang = "zh"
        }
        if(window.localStorage.siteLang.includes("jp")){
            lang = "zh"
        }
        if(window.localStorage.siteLang.includes("gm")){
            lang = "zh"
        }

        if(lang === "en"){
            return Translations.native.en
        }
        if(lang === "zh"){
            return Translations.native.zh
        }
        if(lang === "ml"){
            return Translations.native.ml
        }
        if(lang === "tm"){
            return Translations.native.tm
        }
        if(lang === "jp"){
            return Translations.native.jp
        }
        if(lang === "gm"){
            return Translations.native.gm
        }
    }
    else if (lang === "en"){
        return Translations.native.en
    }
}