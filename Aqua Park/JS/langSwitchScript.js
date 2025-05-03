var arSwitchBtn = document.getElementById('langSwitchAR');
var enSwitchBtn = document.getElementById('langSwitchEN');

const currentLang = localStorage.getItem('lang');

btnSwitch(currentLang);

function btnSwitch(langName) {
    var englishSwitch = document.querySelectorAll('.enLang');
    var arabicSwitch = document.querySelectorAll('.arLang');

    // booking page:
    const label = document.getElementById('label');
    const selectPlaceholder = document.getElementById('placeholder');
    const mem1 = document.getElementById('1member');const mem2 = document.getElementById('2members');const mem3 = document.getElementById('3members');const mem4 = document.getElementById('4members');const mem5 = document.getElementById('5members');const mem6 = document.getElementById('6members');const mem7 = document.getElementById('7members');const mem8 = document.getElementById('8members');const mem9 = document.getElementById('9members');const mem10 = document.getElementById('10members');

    switch (langName) {
        case 'arabic':
            arSwitchBtn.style.backgroundColor = '#007bff'
            arSwitchBtn.style.color = '#fff'
            arSwitchBtn.style.zIndex = '1'

            enSwitchBtn.style.backgroundColor = '#fff'
            enSwitchBtn.style.color = '#007bff'
            enSwitchBtn.style.zIndex = '0'

            arabicSwitch.forEach(element => {
                element.style.display = "block"
            });
            englishSwitch.forEach(element => {
                element.style.display = "none"
            });

            // booking page:
            label.textContent = 'كم عدد الأعضاء؟';
            selectPlaceholder.textContent = 'عدد الأعضاء';
            mem1.textContent = 'عضو واحد';mem2.textContent = 'عضوين';mem3.textContent = 'ثلاثة أعضاء';mem4.textContent = 'أربعة أعضاء';mem5.textContent = 'خمسة أعضاء';mem6.textContent = 'ستة أعضاء';mem7.textContent = 'سبعة أعضاء';mem8.textContent = 'ثمانية أعضاء';mem9.textContent = 'تسعة أعضاء';mem10.textContent = 'عشرة أعضاء';
            break;
        
        case 'english':
            enSwitchBtn.style.backgroundColor = '#007bff'
            enSwitchBtn.style.color = '#fff'
            enSwitchBtn.style.zIndex = '1'

            arSwitchBtn.style.backgroundColor = '#fff'
            arSwitchBtn.style.color = '#007bff'
            arSwitchBtn.style.zIndex = '0'

            arabicSwitch.forEach(element => {
                element.style.display = "none"
            });
            englishSwitch.forEach(element => {
                element.style.display = "block"
            })

            // booking page:
            label.textContent = 'How Many Members Are There?'
            selectPlaceholder.textContent = 'Amount of Members'
            mem1.textContent = '1 Member';mem2.textContent = '2 Members';mem3.textContent = '3 Members';mem4.textContent = '4 Members';mem5.textContent = '5 Members';mem6.textContent = '6 Members';mem7.textContent = '7 Members';mem8.textContent = '8 Members';mem9.textContent = '9 Members';mem10.textContent = '10 Members';
            break;
        
        default:
            enSwitchBtn.style.backgroundColor = '#007bff'
            enSwitchBtn.style.color = '#fff'
            enSwitchBtn.style.zIndex = '1'

            arSwitchBtn.style.backgroundColor = '#fff'
            arSwitchBtn.style.color = '#007bff'
            arSwitchBtn.style.zIndex = '0'

            arabicSwitch.forEach(element => {
                element.style.display = "none"
            });
            englishSwitch.forEach(element => {
                element.style.display = "block"
            })

            // booking page:
            label.textContent = 'How Many Members Are There?'
            selectPlaceholder.textContent = 'Amount of Members'
            return;
    }
    localStorage.setItem('lang', langName)
};