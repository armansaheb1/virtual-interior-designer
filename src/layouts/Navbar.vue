<template>
    <div class="navdark" style="width: 100%; height: 56px; box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1)">
        <div id="phone">
            <div class="phonemenu bg-mine dark:bg-dark"
                style="position: absolute; width: 100%; height: 100%; height: 100%; z-index: 10;top: -100%; overflow: hidden;">
                <div style="width: 100%; height: 56px; box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);">
                    <div>
                        <img style="height: 32px; float: left; margin: 18px; margin-top: 12px"
                            src="https://www.amizax.com/img/logo.png" alt="">
                        <h3
                            style="height: 22px; float: left; margin: 14px; font-size: 26px; font-family: 'BebasNeue-Regular';margin-left: -5px; color: rgb(138 184 52)">
                            AMIZAX</h3>
                    </div>
                    <div>
                        <button @click="phonemenu()"
                            style="margin-top: 8px;margin-right: 16px; float:right; border: none;color: rgba(0, 0, 0, 0.54); border-radius: 8px;width: 40px; height: 44px">
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-10dohqv" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24">
                                <path d="M18 6l-6 6m0 0l-6 6m6-6l6 6m-6-6L6 6" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav style="width: 100%;box-sizing: border-box;padding: 0;">
                    <a href="/" style="text-decoration: none!important">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div style="float: right; margin-left: 20px;"><svg width="22" height="22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.79 22.75H6.21c-2.74 0-4.96-2.232-4.96-4.975v-7.418c0-1.362.84-3.074 1.92-3.915l5.39-4.204c1.62-1.262 4.21-1.322 5.89-.14l6.18 4.334c1.19.831 2.12 2.613 2.12 4.065v7.288a4.968 4.968 0 01-4.96 4.965zM9.48 3.419L4.09 7.623c-.71.561-1.34 1.832-1.34 2.734v7.418c0 1.912 1.55 3.473 3.46 3.473h11.58c1.91 0 3.46-1.551 3.46-3.463v-7.288c0-.961-.69-2.293-1.48-2.833l-6.18-4.335c-1.14-.801-3.02-.761-4.11.09z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M12 18.746c-.41 0-.75-.34-.75-.751v-3.003c0-.41.34-.751.75-.751s.75.34.75.75v3.004c0 .41-.34.75-.75.75z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div><span style="; font-family: 'iranyekan-fanum';">خانه</span>
                            </div><span></span>
                        </div>
                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </a>
                    <a href="/" style="text-decoration: none!important">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div style="float: right; margin-left: 20px;"><svg width="24" height="24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.25 6.5a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm5.25-3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM9.58 3.91A6.25 6.25 0 004.75 10a.75.75 0 01-1.5 0A7.74 7.74 0 0111 2.25a.75.75 0 01.64 1.14L10.6 5.14a.75.75 0 01-1.28-.78l.27-.45zM2.97 14.47c-.1.1-.22.34-.22 1.23v.61h8.5v-.61c0-.89-.13-1.14-.22-1.23-.1-.1-.35-.22-1.25-.22H4.22c-.9 0-1.16.13-1.25.22zm9.78 1.23c0-.87-.1-1.72-.67-2.3-.57-.56-1.42-.65-2.3-.65H4.22c-.88 0-1.74.1-2.3.66-.58.57-.67 1.42-.67 2.29v4.11c0 .87.09 1.72.66 2.3.57.56 1.43.65 2.3.65h5.57c.88 0 1.73-.1 2.3-.66.58-.57.67-1.42.67-2.29V15.7zm-1.5 2.11h-8.5v2c0 .89.13 1.14.22 1.23.1.1.35.22 1.25.22h5.56c.9 0 1.15-.13 1.25-.22.09-.1.22-.34.22-1.23v-2zM22 13.25c.41 0 .75.34.75.75A7.74 7.74 0 0115 21.75a.75.75 0 01-.64-1.14l1.05-1.75a.75.75 0 111.28.78l-.27.45A6.25 6.25 0 0021.25 14c0-.41.33-.75.75-.75z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div><span style="; font-family: 'iranyekan-fanum';">معامله</span>
                            </div><span></span>
                        </div>
                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </a>
                    <a href="/" style="text-decoration: none!important">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div style="float: right; margin-left: 20px;"><svg width="24" height="24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22.75c-4 0-7.25-2.87-7.25-6.4v-3.7c0-.41.34-.75.75-.75s.75.34.75.75c0 2.62 2.47 4.6 5.75 4.6s5.75-1.98 5.75-4.6c0-.41.34-.75.75-.75s.75.34.75.75v3.7c0 3.53-3.25 6.4-7.25 6.4zm-5.75-6.29c.07 2.65 2.62 4.79 5.75 4.79s5.68-2.14 5.75-4.79c-1.3 1.41-3.36 2.29-5.75 2.29s-4.44-.88-5.75-2.29z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M12 13.75c-2.76 0-5.24-1.24-6.45-3.24-.52-.85-.8-1.84-.8-2.86 0-1.72.77-3.34 2.16-4.56C8.27 1.9 10.08 1.25 12 1.25s3.72.65 5.09 1.83c1.39 1.23 2.16 2.85 2.16 4.57 0 1.02-.28 2-.8 2.86-1.21 2-3.69 3.24-6.45 3.24zm0-11c-1.56 0-3.02.52-4.11 1.48-1.06.92-1.64 2.14-1.64 3.42 0 .75.2 1.45.58 2.08.95 1.56 2.93 2.52 5.17 2.52 2.24 0 4.22-.97 5.17-2.52.39-.63.58-1.33.58-2.08 0-1.28-.58-2.5-1.65-3.44-1.09-.94-2.54-1.46-4.1-1.46z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M12 18.75c-4.13 0-7.25-2.62-7.25-6.1v-5c0-3.53 3.25-6.4 7.25-6.4 1.92 0 3.72.65 5.09 1.83 1.39 1.23 2.16 2.85 2.16 4.57v5c0 3.48-3.12 6.1-7.25 6.1zm0-16c-3.17 0-5.75 2.2-5.75 4.9v5c0 2.62 2.47 4.6 5.75 4.6s5.75-1.98 5.75-4.6v-5c0-1.28-.58-2.5-1.65-3.44-1.09-.94-2.54-1.46-4.1-1.46z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div><span style="; font-family: 'iranyekan-fanum';">کوین ها</span>
                            </div><span></span>
                        </div>
                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </a>
                    <a href="/" style="text-decoration: none!important">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div style="float: right; margin-left: 20px;"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="25" fill="none">
                                    <path fill="#4C9AFF" fill-opacity="0.5"
                                        d="M9.5 16.893v-4.648H7.587a.5.5 0 01-.38-.826l4.413-5.148a.5.5 0 01.88.325v4.649h1.913a.5.5 0 01.38.825l-4.413 5.148a.5.5 0 01-.88-.325z">
                                    </path>
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M12 3.495a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zm-10.75 9.25c0-5.937 4.813-10.75 10.75-10.75s10.75 4.813 10.75 10.75-4.813 10.75-10.75 10.75-10.75-4.813-10.75-10.75zm10.8-5.962c.756-.881 2.2-.347 2.2.813v3.899h1.163c1.068 0 1.644 1.252.949 2.063l-4.413 5.149c-.755.88-2.199.347-2.199-.814v-3.898H8.587c-1.068 0-1.644-1.253-.949-2.064l4.413-5.148zm.7 1.49l-3.62 4.222h1.37a.75.75 0 01.75.75v3.972l3.62-4.222H13.5a.75.75 0 01-.75-.75V8.272z"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                            <div><span style="; font-family: 'iranyekan-fanum';">خرید فروش آنی</span>
                            </div><span></span>
                        </div>
                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </a>
                    <a href="/" style="text-decoration: none!important">
                        <div style="padding: 2.5% 5%;text-align: right;">
                            <div style="float: right; margin-left: 20px;"><svg width="24" height="24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.745 22c-.163 0-.326 0-.49-.01-5.368-.232-9.854-4.427-10.228-9.543-.326-4.39 2.291-8.492 6.51-10.213 1.198-.483 1.83-.111 2.099.159.268.26.642.865.144 1.971a7.428 7.428 0 00-.652 3.116c.019 4.121 3.546 7.618 7.85 7.786a8.533 8.533 0 001.832-.121c1.265-.223 1.792.27 1.994.586.2.316.431.995-.336 2C19.436 20.428 16.205 22 12.745 22zm-9.29-9.655c.327 4.428 4.219 8.055 8.858 8.25 3.154.15 6.145-1.246 7.986-3.683.143-.195.21-.335.24-.41a1.554 1.554 0 00-.48.029c-.7.12-1.428.167-2.147.14-5.062-.196-9.203-4.317-9.232-9.172 0-1.284.259-2.52.786-3.683.096-.205.115-.344.125-.419-.086 0-.24.019-.49.121C5.45 5.006 3.188 8.56 3.457 12.345z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div><span style="; font-family: 'iranyekan-fanum';">انتخاب تم</span>
                                <div style="float: left;">
                                    <input type="checkbox" v-model="isDark" @click="toggleDark()"
                                        data-onlabel='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mui-9gf0ym" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M12.745 22c-.163 0-.326 0-.49-.01-5.368-.232-9.854-4.427-10.228-9.543-.326-4.39 2.291-8.492 6.51-10.213 1.198-.483 1.83-.111 2.099.159.268.26.642.865.144 1.971a7.428 7.428 0 00-.652 3.116c.019 4.121 3.546 7.618 7.85 7.786a8.533 8.533 0 001.832-.121c1.265-.223 1.792.27 1.994.586.2.316.431.995-.336 2C19.436 20.428 16.205 22 12.745 22zm-9.29-9.655c.327 4.428 4.219 8.055 8.858 8.25 3.154.15 6.145-1.246 7.986-3.683.143-.195.21-.335.24-.41a1.554 1.554 0 00-.48.029c-.7.12-1.428.167-2.147.14-5.062-.196-9.203-4.317-9.232-9.172 0-1.284.259-2.52.786-3.683.096-.205.115-.344.125-.419-.086 0-.24.019-.49.121C5.45 5.006 3.188 8.56 3.457 12.345z" fill="currentColor"></path></svg>'
                                        data-size="sm" data-onstyle="secondary"
                                        data-offlabel='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mui-1m98bj6" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M12.02 19.283a7.268 7.268 0 01-7.263-7.263 7.268 7.268 0 017.263-7.263 7.268 7.268 0 017.263 7.263 7.268 7.268 0 01-7.263 7.263zm0-13.023a5.768 5.768 0 00-5.76 5.76 5.768 5.768 0 005.76 5.76 5.768 5.768 0 005.76-5.76 5.768 5.768 0 00-5.76-5.76zM12.02 23c-.551 0-1.002-.41-1.002-.962v-.08c0-.55.451-1.002 1.002-1.002.551 0 1.002.451 1.002 1.002 0 .551-.451 1.042-1.002 1.042zm7.153-2.825c-.26 0-.51-.1-.711-.29l-.13-.13a.998.998 0 111.412-1.413l.13.13a.998.998 0 01-.701 1.703zm-14.306 0c-.26 0-.51-.1-.711-.29a.998.998 0 010-1.413l.13-.13a.998.998 0 111.413 1.412l-.13.13c-.191.19-.452.29-.702.29zm17.171-7.153h-.08c-.55 0-1.002-.451-1.002-1.002 0-.551.451-1.002 1.002-1.002.551 0 1.042.451 1.042 1.002 0 .551-.41 1.002-.962 1.002zm-19.956 0h-.08C1.45 13.022 1 12.57 1 12.02c0-.551.45-1.002 1.002-1.002.55 0 1.042.451 1.042 1.002 0 .551-.411 1.002-.962 1.002zm16.96-7.023c-.26 0-.51-.1-.71-.29a.998.998 0 010-1.413l.13-.13a.998.998 0 111.412 1.412l-.13.13c-.19.19-.44.291-.701.291zM4.998 6c-.26 0-.51-.1-.711-.29l-.13-.14a.998.998 0 111.412-1.413l.13.13a.998.998 0 010 1.413c-.19.2-.45.3-.7.3zm7.023-2.955c-.551 0-1.002-.411-1.002-.962v-.08C11.018 1.45 11.47 1 12.02 1c.551 0 1.002.45 1.002 1.002 0 .55-.451 1.042-1.002 1.042z" fill="currentColor"></path></svg>'
                                        checked data-toggle="switchbutton">
                                </div>
                            </div><span></span>

                        </div>
                        <hr style="margin: 0px 12px 0px 0px;
                            flex-shrink: 0;
                            border-width: 0px 0px thin;
                            border-style: solid;
                            border-color: rgb(236, 241, 249);">
                    </a>
                </nav>
                <div
                    style="width: 100%; height: 64px; box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 4px 1px; position: absolute; bottom: 0;">
                    <div style="width: 50%; padding: 2.7% 1% 0 3.6%; float:left; box-sizing: border-box">
                        <button class="buttonblue" style="display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px 16px 0px 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum, sans-serif;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
    box-shadow: none;
    border-radius: 8px;
    padding: 6px 16px;
    min-width: initial;">ثبت نام</button>
                    </div>

                    <div style="width: 50%; padding: 2.7% 1% 0 3.6%; float:left; box-sizing: border-box">
                        <button class="buttongrey" style="display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px 16px 0px 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum, sans-serif;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: transparent;
    width: 100%;
    box-shadow: none;
    border-radius: 8px;
    padding: 6px 16px;
    min-width: initial;">ورود</button>
                    </div>

                </div>
            </div>
            <div class="phonenav" style="position: relative; height: 100%">
                <div>
                    <img style="height: 32px; float: left; margin: 18px; margin-top: 12px"
                        src="https://www.amizax.com/img/logo.png" alt="">
                    <h3
                        style="height: 22px; float: left; margin: 14px; font-size: 26px; font-family: 'BebasNeue-Regular';margin-left: -5px; color: rgb(138 184 52)">
                        AMIZAX</h3>
                </div>
                <div>
                    <button @click="phonemenu()"
                        style="margin-top: 15px; float:right; border: none;background-color: transparent;color: rgba(0, 0, 0, 0.54)">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-10dohqv" focusable="false"
                            aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M2.25 7A.75.75 0 013 6.25h18a.75.75 0 010 1.5H3A.75.75 0 012.25 7zM2.25 12a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM3 16.25a.75.75 0 000 1.5h18a.75.75 0 000-1.5H3z"
                                fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pcnav" style="position: relative; height: 100%; width: 100%">
                <div style="float: right; width: 100%; font-size: 20px; font-family: 'BebasNeue-Regular';margin-left: -5px">
                    <h3
                        style="height: 22px; float: right; margin: 10px; font-size: 26px; font-family: 'BebasNeue-Regular';margin-left: -5px; color: rgb(138 184 52)">
                        AMIZAX</h3>
                    <img style="height: 32px; float: right; margin: 18px; margin-top: 12px"
                        src="https://www.amizax.com/img/logo.png" alt="">

                    <div style="float: right;margin-right: 30px; margin: 10px;">
                        <a href=""
                            style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;">معامله</a>
                    </div>
                    <div style="float: right;margin-right: 30px; margin: 10px; padding: 6px">
                        <a href=""
                            style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;">
                            <svg style="float: left;color:#8D9FB9; margin-right: 2px;" width="20" height="20" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-nqvzgt" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24">
                                <path
                                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                                    fill="currentColor"></path>
                            </svg><a style="float: right;">کوین‌ها</a></a>
                    </div>
                    <div style="float: right;margin-right: 30px; margin: 10px; padding: 6px">
                        <a href=""
                            style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;">
                            <svg style="float: left;color:#8D9FB9; margin-right: 2px;" width="20" height="20" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-nqvzgt" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24">
                                <path
                                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                                    fill="currentColor"></path>
                            </svg><a style="float: right;">خرید فروش آنی</a></a>
                    </div>

                    <div style="float: right;margin-right: 30px; margin: 10px;">
                        <a href=""
                            style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;">بات
                            معامله‌گر</a>
                    </div>
                    <div style="float: right;margin-right: 30px; margin: 10px;">
                        <a href=""
                            style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;">بلاگ</a>
                    </div>
                    <div style="float: right;margin-right: 30px; margin: 10px; padding: 6px">
                        <a href=""
                            style="font-family: 'iranyekan-fanum';text-decoration: none; font-size: 0.9rem;font-weight: 800;">
                            <svg style="float: left;color:#8D9FB9; margin-right: 2px;" width="20" height="20" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-nqvzgt" focusable="false"
                                aria-hidden="true" viewBox="0 0 24 24">
                                <path
                                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                                    fill="currentColor"></path>
                            </svg><a style="float: right;">سایر</a></a>
                    </div>


                    <div style="float: left;padding: 11px;border-right: solid 1.5px lightgrey;">
                        <div style="float: left;">
                            <input type="checkbox" v-model="isDark" @click="toggleDark()"
                                data-onlabel='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mui-9gf0ym" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M12.745 22c-.163 0-.326 0-.49-.01-5.368-.232-9.854-4.427-10.228-9.543-.326-4.39 2.291-8.492 6.51-10.213 1.198-.483 1.83-.111 2.099.159.268.26.642.865.144 1.971a7.428 7.428 0 00-.652 3.116c.019 4.121 3.546 7.618 7.85 7.786a8.533 8.533 0 001.832-.121c1.265-.223 1.792.27 1.994.586.2.316.431.995-.336 2C19.436 20.428 16.205 22 12.745 22zm-9.29-9.655c.327 4.428 4.219 8.055 8.858 8.25 3.154.15 6.145-1.246 7.986-3.683.143-.195.21-.335.24-.41a1.554 1.554 0 00-.48.029c-.7.12-1.428.167-2.147.14-5.062-.196-9.203-4.317-9.232-9.172 0-1.284.259-2.52.786-3.683.096-.205.115-.344.125-.419-.086 0-.24.019-.49.121C5.45 5.006 3.188 8.56 3.457 12.345z" fill="currentColor"></path></svg>'
                                data-size="sm" data-onstyle="secondary"
                                data-offlabel='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mui-1m98bj6" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M12.02 19.283a7.268 7.268 0 01-7.263-7.263 7.268 7.268 0 017.263-7.263 7.268 7.268 0 017.263 7.263 7.268 7.268 0 01-7.263 7.263zm0-13.023a5.768 5.768 0 00-5.76 5.76 5.768 5.768 0 005.76 5.76 5.768 5.768 0 005.76-5.76 5.768 5.768 0 00-5.76-5.76zM12.02 23c-.551 0-1.002-.41-1.002-.962v-.08c0-.55.451-1.002 1.002-1.002.551 0 1.002.451 1.002 1.002 0 .551-.451 1.042-1.002 1.042zm7.153-2.825c-.26 0-.51-.1-.711-.29l-.13-.13a.998.998 0 111.412-1.413l.13.13a.998.998 0 01-.701 1.703zm-14.306 0c-.26 0-.51-.1-.711-.29a.998.998 0 010-1.413l.13-.13a.998.998 0 111.413 1.412l-.13.13c-.191.19-.452.29-.702.29zm17.171-7.153h-.08c-.55 0-1.002-.451-1.002-1.002 0-.551.451-1.002 1.002-1.002.551 0 1.042.451 1.042 1.002 0 .551-.41 1.002-.962 1.002zm-19.956 0h-.08C1.45 13.022 1 12.57 1 12.02c0-.551.45-1.002 1.002-1.002.55 0 1.042.451 1.042 1.002 0 .551-.411 1.002-.962 1.002zm16.96-7.023c-.26 0-.51-.1-.71-.29a.998.998 0 010-1.413l.13-.13a.998.998 0 111.412 1.412l-.13.13c-.19.19-.44.291-.701.291zM4.998 6c-.26 0-.51-.1-.711-.29l-.13-.14a.998.998 0 111.412-1.413l.13.13a.998.998 0 010 1.413c-.19.2-.45.3-.7.3zm7.023-2.955c-.551 0-1.002-.411-1.002-.962v-.08C11.018 1.45 11.47 1 12.02 1c.551 0 1.002.45 1.002 1.002 0 .55-.451 1.042-1.002 1.042z" fill="currentColor"></path></svg>'
                                checked data-toggle="switchbutton">
                        </div>
                    </div>
                    <div style="float: left;margin: 10px; margin-right: 0">
                        <div style="float: left;">
                            <button class="buttonblue" style="display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    text-decoration: none;
    color: inherit;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum,sans-serif;
    text-transform: uppercase;
    min-width: 64px;
    padding: 4px 10px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    box-shadow: none;
    border-radius: 8px;
    padding: 6px 16px;
    min-width: initial;
    font-family: iranyekan-fanum,sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.75;
    padding: 4px 16px;">ثبت نام</button>
                        </div>
                    </div>
                    <div style="float: left;margin-right: 30px;margin: 10px; margin-left: 0">
                        <div style="float: left;">
                            <button class="buttongrey" style="display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    text-decoration: none;
    color: inherit;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum,sans-serif;
    text-transform: uppercase;
    min-width: 64px;
    padding: 3px 9px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(5, 43, 97, 0.5);
    color: #052B61;
    box-shadow: none;
    border-radius: 8px;
    padding: 6px 16px;
    min-width: initial;
    font-family: iranyekan-fanum,sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.75;
    padding: 4px 16px;
    border-color: #E2E9F3;
    margin-left: 8px;">ورود</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
    selector: "body",
    attribute: "theme",
})
const toggleDark = useToggle(isDark);
</script>
<script>

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    methods: {
        phonemenu() {
            var element = document.querySelector('.phonemenu')
            if (element.className.includes('topmenuanimdown')) {
                document.querySelector('.phonemenu').classList.remove('topmenuanimdown')
                document.querySelector('.phonemenu').classList.add('topmenuanimtop')
            } else {
                if (element.className.includes('topmenuanimtop')) {
                    document.querySelector('.phonemenu').classList.remove('topmenuanimtop')
                }
                document.querySelector('.phonemenu').classList.add('topmenuanimdown')
            }
        }
    }
}
</script>

<style lang="scss">
@keyframes ttob {
    from {
        top: -100%;
    }

    to {
        top: 0%;
    }
}

@keyframes btot {
    from {
        top: 0%;
    }

    to {
        top: -100%;
    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.phonenav {
    display: none
}

.pcnav {
    display: block
}

.topmenuanimdown {
    animation-name: ttob;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
}

.topmenuanimtop {
    animation-name: btot;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
}

@media only screen and (max-width: 899px) {
    .phonenav {
        display: block
    }

    .pcnav {
        display: none
    }
}

.mui-127q5co-paper {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 26, 63);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: none;
    box-shadow: none;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    z-index: 1200;
    position: fixed;
    top: 0px;
    outline: 0px;
    right: 0px;
    left: 0px;
    max-height: 100%;
    width: 100%;
    height: 100%;
}

.buttonblue {
    background-color: rgb(5, 43, 97) !important;
    color: rgb(226, 233, 243) !important
}

.dark .buttonblue {
    background-color: rgb(226, 233, 243) !important;
    color: rgb(5, 43, 97) !important;
}

.buttongrey {
    color: rgb(5, 43, 97) !important;
}

.navdark {
    background-color: white;
}

.dark .buttongrey {
    color: rgb(226, 233, 243) !important;
}

.dark .navdark {
    background-color: rgb(15, 28, 46);
    color: rgb(229, 240, 255);
}

.dark .navdark a {
    color: rgb(229, 240, 255);
}

.navdark a {
    color: #052B61;
}
</style>
