<template>
    <footer>
        <div id="navigations">
            <picture id="icon">
                <Logo :dark="false" />
            </picture>
            <ul id="links">
                <li class="link">
                    <NavLinkButton :text="'About'" :type="2" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Services'" :type="2" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Use Cases'" :type="2" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Pricing'" :type="2" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Blog'" :type="2" />
                </li>
            </ul>
            <div id="socials" v-if="!WidthMobile()">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <picture class="component logo">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#191A23" />
                            <path
                                d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z"
                                fill="#191A23" />
                            <path
                                d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z"
                                fill="#191A23" />
                        </svg>
                    </picture>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                            fill="white" />
                    </svg>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <picture class="component logo">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.9961 4.4915C16.6854 3.97449 17.3058 3.35409 17.7884 2.63028C17.168 2.90602 16.4442 3.11282 15.7204 3.18176C16.4786 2.73369 17.0301 2.04435 17.3058 1.18267C16.6165 1.59628 15.8238 1.90648 15.031 2.07881C14.3417 1.35501 13.4111 0.941406 12.3771 0.941406C10.378 0.941406 8.75804 2.56135 8.75804 4.56043C8.75804 4.83617 8.79251 5.1119 8.86144 5.38764C5.86282 5.2153 3.1744 3.76769 1.38212 1.59628C1.07192 2.11328 0.899586 2.73369 0.899586 3.42302C0.899586 4.66383 1.51999 5.76677 2.51953 6.42165C1.93359 6.38718 1.34766 6.24931 0.86512 5.97358V6.00804C0.86512 7.76585 2.10593 9.21346 3.76034 9.55813C3.48461 9.62707 3.13994 9.696 2.82973 9.696C2.58847 9.696 2.38166 9.66154 2.1404 9.62707C2.58847 11.0747 3.93267 12.1087 5.51815 12.1432C4.27734 13.1082 2.72633 13.6942 1.03745 13.6942C0.727252 13.6942 0.451517 13.6597 0.175781 13.6252C1.76126 14.6592 3.65694 15.2452 5.72495 15.2452C12.3771 15.2452 15.9961 9.76494 15.9961 4.97403C15.9961 4.8017 15.9961 4.66383 15.9961 4.4915Z"
                                fill="black" />
                        </svg>
                    </picture>
                </a>
            </div>
        </div>
        <div id="contacts">
            <div id="physical-info">
                <h4 id="contact-title">Contact Us</h4>
                <p id="email-info">
                    <span id="title">Email: </span>
                    <span id="message">info@positivus.com</span>
                </p>
                <p id="phone-info">
                    <span id="title">Phone: </span>
                    <span id="message">555-567-8901</span>
                </p>
                <p id="address-info">
                    <span id="title">Address: </span>
                    <span id="message">1234 Main St
                        Moonstone City, Stardust State 12345</span>
                </p>
            </div>
            <div id="virtual-info">
                <div class="wrapper">
                    <div id="email-input">
                        <input type="email" name="" id="" placeholder="Email">
                    </div>
                    <BasicButton :type="3" :text="'Subscribe to news'" />
                </div>
            </div>
        </div>
        <div id="socials" class="alt" v-if="WidthMobile()">
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <picture class="component logo">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#191A23" />
                        <path
                            d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z"
                            fill="#191A23" />
                        <path
                            d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z"
                            fill="#191A23" />
                    </svg>
                </picture>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                        fill="white" />
                </svg>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <picture class="component logo">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.9961 4.4915C16.6854 3.97449 17.3058 3.35409 17.7884 2.63028C17.168 2.90602 16.4442 3.11282 15.7204 3.18176C16.4786 2.73369 17.0301 2.04435 17.3058 1.18267C16.6165 1.59628 15.8238 1.90648 15.031 2.07881C14.3417 1.35501 13.4111 0.941406 12.3771 0.941406C10.378 0.941406 8.75804 2.56135 8.75804 4.56043C8.75804 4.83617 8.79251 5.1119 8.86144 5.38764C5.86282 5.2153 3.1744 3.76769 1.38212 1.59628C1.07192 2.11328 0.899586 2.73369 0.899586 3.42302C0.899586 4.66383 1.51999 5.76677 2.51953 6.42165C1.93359 6.38718 1.34766 6.24931 0.86512 5.97358V6.00804C0.86512 7.76585 2.10593 9.21346 3.76034 9.55813C3.48461 9.62707 3.13994 9.696 2.82973 9.696C2.58847 9.696 2.38166 9.66154 2.1404 9.62707C2.58847 11.0747 3.93267 12.1087 5.51815 12.1432C4.27734 13.1082 2.72633 13.6942 1.03745 13.6942C0.727252 13.6942 0.451517 13.6597 0.175781 13.6252C1.76126 14.6592 3.65694 15.2452 5.72495 15.2452C12.3771 15.2452 15.9961 9.76494 15.9961 4.97403C15.9961 4.8017 15.9961 4.66383 15.9961 4.4915Z"
                            fill="black" />
                    </svg>
                </picture>
            </a>
        </div>
        <div id="rights">
            <p id="copyright">
                © 2023 Positivus. All Rights Reserved.
            </p>
            <NavLinkButton :text="'Privacy Policy'" :type="2" />
        </div>
    </footer>
</template>

<script setup>
import Logo from '../Logo/Logo.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';
import { ref } from 'vue';

const width = ref(0);

width.value = window.innerWidth;

window.addEventListener('resize', (e) => {
    WidthMobile();
});

function WidthMobile() {
    width.value = window.innerWidth;

    if (width.value < 1040) return true;
    return false;
};
</script>

<style scoped>
footer {
    background-color: var(--secondary-color);
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    margin-top: 70px;
    padding: 55px 60px;
    display: flex;
    flex-direction: column;
    gap: 55px;
}

#navigations {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#links {
    padding-left: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
}

#socials {
    display: flex;
    gap: 10px;
    align-items: center;
}

#socials.alt {
    gap: 30px;
}

#socials .logo {
    aspect-ratio: 1;
    background-color: var(--white);
    border-radius: 50%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
}

#socials .logo svg {
    height: 16px;
    width: auto;
}

#socials a>svg>path {
    transition: 0.2s;
}

#contacts {
    display: flex;
    align-items: center;
    gap: 80px;
}

#physical-info {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

#physical-info #contact-title {
    background-color: var(--primary-color);
    border-radius: 7px;
    width: max-content;
    padding: 0 7px;
    margin-bottom: 7px;
}

#physical-info p {
    color: var(--white);
}

#virtual-info {
    flex-grow: 1;
    flex-shrink: 1;

    min-width: 440px;
}

#virtual-info .wrapper {
    background-color: #292A32;
    border-radius: 14px;
    padding: 58px 40px;
    display: flex;
    gap: 20px;
}

#virtual-info #email-input {
    flex-grow: 1;
    flex-shrink: 1;

    border: 2px solid var(--white);
    border-radius: 14px;
    padding: 0 35px;
    display: flex;
    align-items: center;
}

#virtual-info input {
    background-color: transparent;
    border: 0;
    color: var(--white);
    width: 100%;
    outline: none;
}

#virtual-info input::placeholder {
    color: var(--white)
}

#rights {
    border-top: 2px solid var(--white);
    color: var(--white);
    padding-top: 50px;
    display: flex;
    gap: 30px;
    align-items: center;
}

/* LISTENERS */
#socials .logo:hover {
    background-color: var(--primary-color);
}

#socials a:hover>svg>path {
    fill: var(--primary-color);
}

/* RESPONSIVE */
@media screen and (max-width: 999px) {
    #contacts {
        flex-direction: column;
        align-items: initial;
        gap: 50px;
    }
}

@media screen and (max-width: 919px) {
    #navigations {
        flex-direction: column;
        gap: 30px;
        align-items: initial;
        justify-content: initial;
    }
}

@media screen and (max-width: 720px) {
    #virtual-info {
        min-width: initial;
    }
}

@media screen and (max-width: 620px) {
    footer {
        padding: 55px 40px;
    }

    #links {
        flex-wrap: wrap;
    }

    #virtual-info .wrapper {
        flex-direction: column;
    }

    #virtual-info #email-input {
        height: 68px;
    }

    #virtual-info input {
        background-color: transparent;
        border: 0;
        color: var(--white);
        width: 100%;
        outline: none;
    }
}

@media screen and (max-width: 520px) {
    footer {
        padding: 55px 20px;
        align-items: center;
    }

    #navigations {
        align-items: center;
    }

    #links {
        flex-direction: column;
    }

    #physical-info {
        max-width: initial;
        align-items: center;
        text-align: center;
    }

    #physical-info #address-info {
        max-width: 320px;
    }

    #rights {
        flex-direction: column;
    }
}
</style>