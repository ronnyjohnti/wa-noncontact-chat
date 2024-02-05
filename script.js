(() => {
    let iconsContainer = document.querySelector('._1sPvB._2XdMx>span');

    if(!iconsContainer) {
        const intervalId = setInterval(function () {
            iconsContainer = document.querySelector('._1sPvB._2XdMx>span');
            if(iconsContainer) {
                clearInterval(intervalId)
                renderButton(iconsContainer)
            }
        }, 1000)
    }
})()

const renderButton = iconsContainer => {
    const iconNonContactChat = document.createElement('div')
    iconNonContactChat.classList.add('_3NdAd')
    iconNonContactChat.innerHTML = `<div class="_3OtEr">
        <div aria-disabled="false" role="button" tabindex="0" class="_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="2" title="New Chat" aria-label="New Chat" id="startNonContactChat">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
        </div>
    </div>`

    iconNonContactChat.addEventListener('click', () => {
        renderPhoneNumberPopup()
    })

    iconsContainer.prepend(iconNonContactChat)
}

const renderPhoneNumberPopup = () => {
    const containerPhoneNumber = document.createElement('div')
    containerPhoneNumber.classList.add('containerPhoneNumber')
    containerPhoneNumber.innerHTML = `<div id="phoneNumberPopup">
        <input name="phoneNumber">
        <a href="whatsapp://send?phone=5585992132311" role="button" aria-roledescription="Start Chat With Non Contact" onclick="removePhoneNumberPopup">Conversar</a>
    </div>`

    document.querySelector('.two._1jJ70').append(containerPhoneNumber)
}

const removePhoneNumberPopup = (event) => {
    event.
    document.querySelector('.containerPhoneNumber').remove()
    // document.querySelector('._3NdAd').remove()
    // document.querySelector('._1sPvB._2XdMx>span').prepend(document.querySelector('._3NdAd'))
    // document.querySelector('._1sPvB._2XdMx>span').prepend(document.querySelector('.containerPhoneNumber'))
    // document.querySelector('._1sPvB._2XdMx>span').prepend(document.querySelector('._1sPvB._2XdMx>span>div._3NdAd'))
    // document.querySelector('._1sPvB._2XdMx>span').prepend(document.querySelector('._1sPvB._2XdMx>span>div.containerPhoneNumber'))
    // document.querySelector('._1sPvB._2XdMx>span').prepend(document.querySelector('._1sPvB._2XdMx>span>div._3NdAd>div._3OtEr'))
}