import React from 'react'

function JsxSample2() {

    var onlineStatus = false;


    //onlineStatus true ise ekrana "Kullanıcı online!" değilse "Kullanıcı offline!" yazsın!

    //tek satırda if örneği

    // var data = onlineStatus == true ? "Kullanıcı Online!" : "Kullanıcı offline"

    //Bir js dosyasında jsx kullanacaksanız PARANTEZ AÇIYORSUNUZ. JSx içerisinde JS kullanacaksan { } açıyorsun

    return (
        <>
         {
             onlineStatus === true ? (<span>Kullanı Online</span>) : (<span>Kullanıcı Offline!</span>)
         }
        </>
    )
}

export default JsxSample2