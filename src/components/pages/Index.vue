<template>
  <div class="hello">
    <div style="">
      <div class="half text-half" style=" float: right; clear: bottom;">
        <h1 class="lightertext" style="    margin: 0px;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.75;
    font-family: iranyekan-fanum, sans-serif;
    ">{{ general.fa_name }}</h1>

        <h2 style="margin: 0px;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75;
    font-family: iranyekan-fanum, sans-serif;
    color: rgb(134, 158, 192);
    display: block;
    clear:both">
          {{ general.fa_title }}

        </h2>
        <div style="width: 100%">
          <input type="text" class="form-control"
            style="margin-top: 10px; background: transparent; float: right; height: 48px;border-color: rgb(108 125 147); text-align: right; color : rgb(229 240 255); font-family: 'iranyekan-fanum'"
            placeholder="شماره موبایلتان را وارد کنید">
          <button class="form-control btn buttonblue"
            style="margin-top: 10px; float: right; height: 48px;margin-right: -10px; background: rgb(134, 158, 192); text-align: right; font-family: 'iranyekan-fanum'; clear: bottom: ;;"><svg
              width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.1 6.46A.75.75 0 109.04 5.4l-6.07 6.07a.75.75 0 000 1.06l6.07 6.07a.75.75 0 101.06-1.06l-4.79-4.79H20.5a.75.75 0 000-1.5H5.31l4.79-4.79z"
                fill="currentColor"></path>
            </svg> شروع</button><br><br><br>
          <p class="lightertext" style="font-size: 10px;margin-top: -10px;font-family: 'iranyekan-fanum';">در کمتر
            از ۵ دقیقه ثبت‌نام و اولین معامله
            خود را شروع کنید.</p>
        </div>



      </div>
      <div class="half" style="float: right; padding-top:40px ">
        <img class="mobimage" src="/banner-mobiles.png" style=" height: 100%;" alt="">
      </div>
      <div style="clear:both"></div>

      <div class="lightercard notphone"
        style="width:90%; margin:auto; height:75px; margin-top: -1px;position: relative;border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 4px 10px; margin-bottom: 30px;">
        <div v-for="item in board"
          style="width:25%; float: left; height: 50px;border-right: solid rgba(150, 150, 150, .15) 2px;margin-top: 15px;">
          <div style="width: 20%;float: right;height: 50px;">
            <img class="" :src="`https://amizax.com/icons/color/${item.symbol
              .replace('USDT', '')
              .toLowerCase()}.svg`" :onerror="`javascript:this.src='https://amizax.com/icons/color/${item.symbol
    .replace('USDT', '')
    .toLowerCase()}.png';`" style="height: 65%; margin-top:15%" alt="">
          </div>
          <div style="width: 35%;float: right;height: 50px; margin-top:10px; text-align: right;">
            <h6 class="lightertext" style="margin-top: -5px">{{ item.fa_symbol }}</h6>
            <h6 class="normaltext" style="font-size: 12px;">{{ item.symbol.replace('USDT', '') }}</h6>
          </div>
          <div style="width: 45%;float: right;height: 50px; text-align: left;padding-left: 20px;">
            <a class="lightertext"
              style=";text-decoration: none;margin-top: -15px; background-color: #FFEBEE; font-size: 12px;color:#EB4763"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-wc8r4m" dir="ltr"><svg width="16" height="16"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1r9jt6h" focusable="false" aria-hidden="true"
                  viewBox="0 0 24 24">
                  <path
                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                    fill="currentColor"></path>
                </svg> -0.37٪</span></a><br>
            <a class="normaltext" style="font-size: 12px;text-decoration: none;"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-swazh6"><span>1,020</span><span
                  class="MuiTypography-root MuiTypography-overline mui-1hcbdw1">تومان</span></span></a>
          </div>

        </div>



      </div>

      <div class="lightercard onphone"
        style="width:100%; margin:auto; height:150px; margin-top: -1px;position: relative; box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 4px 10px; margin-bottom: 30px;">
        <div style="width:50%; float: left; height: 50%;border: solid rgba(150, 150, 150, .15) 1px;">
          <div style="width: 20%;float: right;height: 50px;">
            <img src="https://api.wallex.ir/coins/BTC/icon/svg" style="height: 65%; margin-top:15%" alt="">
          </div>
          <div style="width: 35%;float: right;height: 50px; margin-top:10px; text-align: right;">
            <h6 class="lightertext" style="margin-top: -5px">بیت کوین</h6>
            <h6 class="normaltext" style="font-size: 12px;">BTC</h6>
          </div>
          <div style="width: 45%;float: right;height: 50px; text-align: left;padding-left: 20px;">
            <a class="lightertext"
              style=";text-decoration: none;margin-top: -15px; background-color: #FFEBEE; font-size: 12px;color:#EB4763"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-wc8r4m" dir="ltr"><svg width="16" height="16"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1r9jt6h" focusable="false" aria-hidden="true"
                  viewBox="0 0 24 24">
                  <path
                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                    fill="currentColor"></path>
                </svg> -0.37٪</span></a><br>
            <a class="normaltext" style="font-size: 12px;text-decoration: none;"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-swazh6"><span>1,020</span><span
                  class="MuiTypography-root MuiTypography-overline mui-1hcbdw1">تومان</span></span></a>
          </div>

        </div>
        <div style="width:50%; float: left; height: 50%;border: solid rgba(150, 150, 150, .15) 1px;">
          <div style="width: 20%;float: right;height: 50px;">
            <img src="https://api.wallex.ir/coins/DOGE/icon/svg" style="height: 65%; margin-top:15%" alt="">
          </div>
          <div style="width: 35%;float: right;height: 50px; margin-top:10px; text-align: right;">
            <h6 class="lightertext" style="margin-top: -5px">دوج</h6>
            <h6 class="normaltext" style="font-size: 12px;">DOGE</h6>
          </div>
          <div style="width: 45%;float: right;height: 50px; text-align: left;padding-left: 20px;">
            <a class="lightertext"
              style=";text-decoration: none;margin-top: -15px; background-color: #FFEBEE; font-size: 12px;color:#EB4763"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-wc8r4m" dir="ltr"><svg width="16" height="16"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1r9jt6h" focusable="false" aria-hidden="true"
                  viewBox="0 0 24 24">
                  <path
                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                    fill="currentColor"></path>
                </svg> -0.37٪</span></a><br>
            <a class="normaltext" style="font-size: 12px;text-decoration: none;"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-swazh6"><span>1,020</span><span
                  class="MuiTypography-root MuiTypography-overline mui-1hcbdw1">تومان</span></span></a>
          </div>

        </div>
        <div style="width:50%; float: left; height: 50%;border: solid rgba(150, 150, 150, .15) 1px;">
          <div style="width: 20%;float: right;height: 50px;">
            <img src="https://api.wallex.ir/coins/USDT/icon/svg" style="height: 65%; margin-top:15%" alt="">
          </div>
          <div style="width: 35%;float: right;height: 50px; margin-top:10px; text-align: right;">
            <h6 class="lightertext" style="margin-top: -5px">تتر</h6>
            <h6 class="normaltext" style="font-size: 12px;">USDT</h6>
          </div>
          <div style="width: 45%;float: right;height: 50px; text-align: left;padding-left: 20px;">
            <a class="lightertext"
              style=";text-decoration: none;margin-top: -15px; background-color: #FFEBEE; font-size: 12px;color:#EB4763"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-wc8r4m" dir="ltr"><svg width="16" height="16"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1r9jt6h" focusable="false" aria-hidden="true"
                  viewBox="0 0 24 24">
                  <path
                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                    fill="currentColor"></path>
                </svg> -0.37٪</span></a><br>
            <a class="normaltext" style="font-size: 12px;text-decoration: none;"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-swazh6"><span>1,020</span><span
                  class="MuiTypography-root MuiTypography-overline mui-1hcbdw1">تومان</span></span></a>
          </div>

        </div>
        <div style="width:50%; float: left; height: 50%;border: solid rgba(150, 150, 150, .15) 1px;">
          <div style="width: 20%;float: right;height: 50px;">
            <img src="https://api.wallex.ir/coins/SHIB/icon/svg" style="height: 65%; margin-top:15%" alt="">
          </div>
          <div style="width: 35%;float: right;height: 50px; margin-top:10px; text-align: right;">
            <h6 class="lightertext" style="margin-top: -5px">شیبا</h6>
            <h6 class="normaltext" style="font-size: 12px;">SHIB</h6>
          </div>
          <div style="width: 45%;float: right;height: 50px; text-align: left;padding-left: 20px;">
            <a class="lightertext"
              style=";text-decoration: none;margin-top: -15px; background-color: #FFEBEE; font-size: 12px;color:#EB4763"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-wc8r4m" dir="ltr"><svg width="16" height="16"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1r9jt6h" focusable="false" aria-hidden="true"
                  viewBox="0 0 24 24">
                  <path
                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                    fill="currentColor"></path>
                </svg> -0.37٪</span></a><br>
            <a class="normaltext" style="font-size: 12px;text-decoration: none;"><span
                class="MuiTypography-root MuiTypography-subtitle3 mui-swazh6"><span>1,020</span><span
                  class="MuiTypography-root MuiTypography-overline mui-1hcbdw1">تومان</span></span></a>
          </div>

        </div>
      </div>
      <div style="width: 100%; height: 168px; padding: 3%;padding-top: 2%">
        <a v-for="item in topsticker" v-bind:key="item" :href="item.link"
          style="width: 33%; float: left; border-radius: 20px; padding: 0.5%;">
          <img style="border-radius: 20px;width: 100%; height: 100%" :src="item.get_pic" alt="">
        </a>
      </div>
      <div style="clear: both"></div>
      <br>

      <div style="padding: 5%" class="MuiBox-root mui-1fx0y3e">
        <svg style="text-align: right;float:right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
          focusable="false" aria-hidden="true" viewBox="0 0 24 24">
          <path fill="#4C9AFF" fill-opacity="0.5" d="M10.5 3l-3 5h7L11 20.5 21 8l-4-5h-6.5z"></path>
          <path fill="currentColor"
            d="M23 8a.692.692 0 00-.131-.403l-3.91-5.333A.644.644 0 0018.445 2H5.555a.644.644 0 00-.514.264l-3.91 5.333a.684.684 0 00.011.82l10.356 13.334A.64.64 0 0012 22a.64.64 0 00.502-.25L22.858 8.419A.692.692 0 0023 8zM5.442 3.924l1.648 3.41H2.942l2.5-3.41zM15 8.667l-3 10.346L9 8.667h6zM9.42 7.333L12 3.778l2.578 3.555H9.422zm3.868-4h4.114l-1.646 3.404-2.468-3.404zM8.243 6.737L6.598 3.333h4.113L8.243 6.737zm-.59 1.93l2.78 9.585L2.99 8.667h4.664zm8.694 0h4.664l-7.444 9.585 2.78-9.585zm.563-1.334l1.648-3.41 2.5 3.41H16.91z">
          </path>
        </svg>
        <h2 style="text-align: right;float:right; font-size: 1.4rem; margin-right: 10px;" class="lightertext">چرا والکس؟
        </h2>
      </div>
      <div class="notphone">
        <div v-if="bottomsticker.length > 1" style="width: 92%;margin:auto;">
          <div v-for="item in bottomsticker.slice(0, 1)" v-bind:key="item"
            style="width: 31%; border-radius: 20px; padding: 0.8%; float: left; margin: 1%" class="lightercard">
            <div>
              <i class="material-symbols-outlined" style="width: 50px; font-size: 50px">{{ item.icon }}</i>
            </div>
            <div>
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div><br>
          </div>
          <div v-for="item in bottomsticker.slice(1, 2)"
            style="width: 65%; border-radius: 20px; padding: 0.8%; float: left; margin: 1%" class="darkercard">
            <div>
              <div>
                <i class="material-symbols-outlined" style="width: 50px; font-size: 50px">{{ item.icon }}</i>
              </div>
            </div>
            <div>
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div><br>
          </div>
        </div>


        <div v-if="bottomsticker.length > 3" style="width: 92%;margin:auto;">
          <div v-for="item in bottomsticker.slice(2, 3)" v-bind:key="item"
            style="width: 31%; border-radius: 20px; padding: 0.8%; float: right; margin: 1%" class="lightercard">
            <div>
              <div>
                <i class="material-symbols-outlined" style="width: 50px; font-size: 50px">{{ item.icon }}</i>
              </div>
            </div>
            <div>
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div><br>
          </div>
          <div v-for="item in bottomsticker.slice(3, 4)" v-bind:key="item"
            style="width: 65%; border-radius: 20px; padding: 0.8%; float: right; margin: 1%" class="lightercard">
            <div>
              <div>
                <i class="material-symbols-outlined" style="width: 50px; font-size: 50px">{{ item.icon }}</i>
              </div>
            </div>
            <div>
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div><br>
          </div>
        </div>



        <div v-if="bottomsticker.length > 6" style="width: 92%;margin:auto;">
          <div v-for="item in bottomsticker.slice(4, 5)" v-bind:key="item"
            style="width: 31.5%; border-radius: 20px; padding: 0.8%; float: left; margin: 1%" class="lightercard">
            <div>
              <div>
                <i class="material-symbols-outlined" style="width: 50px; font-size: 50px">{{ item.icon }}</i>
              </div>
            </div>
            <div>
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div><br>
          </div>
          <div v-for="item in bottomsticker.slice(5, 6)" v-bind:key="item"
            style="width: 31.5%; border-radius: 20px; padding: 0.8%; float: left; margin: 1%" class="lightercard">
            <div>
              <div>
                <i class="material-symbols-outlined" style="width: 50px; font-size: 50px">{{ item.icon }}</i>
              </div>
            </div>
            <div>
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div><br>
          </div>
          <div v-for="item in bottomsticker.slice(6, 7)" v-bind:key="item"
            style="width: 31.5%; border-radius: 20px; padding: 0.8%; float: left; margin: 1%; margin-right: 0;"
            class="lightercard">
            <div>
              <div>
                <i class="material-symbols-outlined" style="width: 50px; font-size: 50px">{{ item.icon }}</i>
              </div>
            </div>
            <div>
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div><br>
          </div>
        </div>
      </div>


      <div class="onphone">
        <br>
        <div v-if="bottomsticker.length > 1" style="width: 92%;margin:auto;">
          <div v-for="item in bottomsticker.slice(0, 1)" v-bind:key="item"
            style="width: 100%; border-radius: 20px; padding: 0.8%; margin: 1%" class="darkercard">
            <div style="width: 10%; float: right; ; margin-top: 10px"><svg width="32" height="32" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-wi39m"
                focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M1.842 15.65c0 2.226 1.992 3.892 4.428 3.892s4.42-1.666 4.42-3.893v-1.983a3.9 3.9 0 011.314-.226c.52 0 .954.05 1.306.176v2.042c0 2.226 1.984 3.884 4.42 3.884 2.435 0 4.428-1.658 4.428-3.884 0-.578-.093-1.13-.402-1.867l-3.282-7.65c-.451-1.063-1.406-1.683-2.62-1.683-1.54 0-2.544.988-2.544 2.461v.745a4.897 4.897 0 00-1.306-.159 4.58 4.58 0 00-1.314.193v-.779c0-1.473-1.005-2.46-2.545-2.46-1.213 0-2.168.619-2.62 1.673l-3.28 7.66c-.31.736-.403 1.288-.403 1.857zm8.848-4.403v-1.122c.41-.134.862-.2 1.314-.2.477 0 .912.058 1.306.158v1.113c-.352-.125-.787-.175-1.306-.175-.469 0-.929.083-1.314.226zm-7.517 4.402c0-1.556 1.34-2.611 3.097-2.611 1.758 0 3.14 1.055 3.14 2.611 0 1.566-1.382 2.62-3.14 2.62-1.758 0-3.097-1.054-3.097-2.62zm11.418.009c0-1.565 1.38-2.62 3.139-2.62 1.757 0 3.097 1.055 3.097 2.62 0 1.557-1.34 2.612-3.097 2.612-1.758 0-3.14-1.055-3.14-2.612z"
                  fill="currentColor"></path>
              </svg></div>
            <div style="width: 90%; float: right; text-align: right;">
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div>
            <div style="clear:both"></div>
          </div>
          <div v-for="item in bottomsticker.slice(1, 2)" v-bind:key="item"
            style="width: 100%; border-radius: 20px; background-color: white; padding: 0.8%; margin: 1%">
            <div style="width: 10%; float: right; ; margin-top: 10px"><svg width="32" height="32" fill="none"
                xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M8.388 15.696c0 .426.276.686.72.686h1.716c.435 0 .712-.26.712-.686v-9.92c0-.418-.277-.677-.712-.677H9.108c-.444 0-.72.259-.72.678v9.919zm4.068 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686V7.509c0-.427-.277-.686-.72-.686h-1.708c-.444 0-.72.26-.72.686v8.187zm-8.128 0c0 .426.268.686.712.686h1.716c.435 0 .72-.26.72-.686V9.208c0-.426-.285-.686-.72-.686H5.04c-.444 0-.712.26-.712.686v6.488zm12.196 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686v-4.847c0-.418-.277-.686-.72-.686h-1.708c-.443 0-.72.268-.72.686v4.847zM3.642 18.224c0 .376.31.677.686.677h15.344a.682.682 0 100-1.364H4.328a.684.684 0 00-.686.687z"
                  fill="currentColor"></path>
              </svg></div>
            <div style="width: 90%; float: right; text-align: right;">
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
            </div>
            <div style="clear:both"></div>
          </div>
        </div>


        <div v-if="bottomsticker.length > 3" style="width: 92%;margin:auto;">
          <div v-for="item in bottomsticker.slice(2, 3)" v-bind:key="item"
            style="width: 100%; border-radius: 20px; background-color: white; padding: 0.8%; margin: 1%">
            <div style="width: 10%; float: right; ; margin-top: 10px"><svg width="32" height="32" fill="none"
                xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M8.388 15.696c0 .426.276.686.72.686h1.716c.435 0 .712-.26.712-.686v-9.92c0-.418-.277-.677-.712-.677H9.108c-.444 0-.72.259-.72.678v9.919zm4.068 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686V7.509c0-.427-.277-.686-.72-.686h-1.708c-.444 0-.72.26-.72.686v8.187zm-8.128 0c0 .426.268.686.712.686h1.716c.435 0 .72-.26.72-.686V9.208c0-.426-.285-.686-.72-.686H5.04c-.444 0-.712.26-.712.686v6.488zm12.196 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686v-4.847c0-.418-.277-.686-.72-.686h-1.708c-.443 0-.72.268-.72.686v4.847zM3.642 18.224c0 .376.31.677.686.677h15.344a.682.682 0 100-1.364H4.328a.684.684 0 00-.686.687z"
                  fill="currentColor"></path>
              </svg></div>
            <div style="width: 90%; float: right; text-align: right;">
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div>
            <div style="clear:both"></div>
          </div>
          <div v-for="item in bottomsticker.slice(3, 4)" v-bind:key="item"
            style="width: 100%; border-radius: 20px; background-color: white; padding: 0.8%; margin: 1%">
            <div style="width: 10%; float: right; ; margin-top: 10px"><svg width="32" height="32" fill="none"
                xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M8.388 15.696c0 .426.276.686.72.686h1.716c.435 0 .712-.26.712-.686v-9.92c0-.418-.277-.677-.712-.677H9.108c-.444 0-.72.259-.72.678v9.919zm4.068 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686V7.509c0-.427-.277-.686-.72-.686h-1.708c-.444 0-.72.26-.72.686v8.187zm-8.128 0c0 .426.268.686.712.686h1.716c.435 0 .72-.26.72-.686V9.208c0-.426-.285-.686-.72-.686H5.04c-.444 0-.712.26-.712.686v6.488zm12.196 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686v-4.847c0-.418-.277-.686-.72-.686h-1.708c-.443 0-.72.268-.72.686v4.847zM3.642 18.224c0 .376.31.677.686.677h15.344a.682.682 0 100-1.364H4.328a.684.684 0 00-.686.687z"
                  fill="currentColor"></path>
              </svg></div>
            <div style="width: 90%; float: right; text-align: right;">
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div>
            <div style="clear:both"></div>
          </div>
        </div>



        <div v-if="bottomsticker.length > 6" style="width: 92%;margin:auto;">
          <div v-for="item in bottomsticker.slice(4, 5)" v-bind:key="item"
            style="width: 100%; border-radius: 20px; background-color: white; padding: 0.8%; margin: 1%">
            <div style="width: 10%; float: right; ; margin-top: 10px"><svg width="32" height="32" fill="none"
                xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M8.388 15.696c0 .426.276.686.72.686h1.716c.435 0 .712-.26.712-.686v-9.92c0-.418-.277-.677-.712-.677H9.108c-.444 0-.72.259-.72.678v9.919zm4.068 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686V7.509c0-.427-.277-.686-.72-.686h-1.708c-.444 0-.72.26-.72.686v8.187zm-8.128 0c0 .426.268.686.712.686h1.716c.435 0 .72-.26.72-.686V9.208c0-.426-.285-.686-.72-.686H5.04c-.444 0-.712.26-.712.686v6.488zm12.196 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686v-4.847c0-.418-.277-.686-.72-.686h-1.708c-.443 0-.72.268-.72.686v4.847zM3.642 18.224c0 .376.31.677.686.677h15.344a.682.682 0 100-1.364H4.328a.684.684 0 00-.686.687z"
                  fill="currentColor"></path>
              </svg></div>
            <div style="width: 90%; float: right; text-align: right;">
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div>
            <div style="clear:both"></div>
          </div>
          <div v-for="item in bottomsticker.slice(5, 6)" v-bind:key="item"
            style="width: 100%; border-radius: 20px; background-color: white; padding: 0.8%; margin: 1%">
            <div style="width: 10%; float: right; ; margin-top: 10px"><svg width="32" height="32" fill="none"
                xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M8.388 15.696c0 .426.276.686.72.686h1.716c.435 0 .712-.26.712-.686v-9.92c0-.418-.277-.677-.712-.677H9.108c-.444 0-.72.259-.72.678v9.919zm4.068 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686V7.509c0-.427-.277-.686-.72-.686h-1.708c-.444 0-.72.26-.72.686v8.187zm-8.128 0c0 .426.268.686.712.686h1.716c.435 0 .72-.26.72-.686V9.208c0-.426-.285-.686-.72-.686H5.04c-.444 0-.712.26-.712.686v6.488zm12.196 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686v-4.847c0-.418-.277-.686-.72-.686h-1.708c-.443 0-.72.268-.72.686v4.847zM3.642 18.224c0 .376.31.677.686.677h15.344a.682.682 0 100-1.364H4.328a.684.684 0 00-.686.687z"
                  fill="currentColor"></path>
              </svg></div>
            <div style="width: 90%; float: right; text-align: right;">
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div>
            <div style="clear:both"></div>
          </div>
          <div v-for="item in bottomsticker.slice(6, 7)" v-bind:key="item"
            style="width: 100%; border-radius: 20px; background-color: white; padding: 0.8%; margin: 1%; margin-right: 0;">
            <div style="width: 10%; float: right; ; margin-top: 10px"><svg width="32" height="32" fill="none"
                xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M8.388 15.696c0 .426.276.686.72.686h1.716c.435 0 .712-.26.712-.686v-9.92c0-.418-.277-.677-.712-.677H9.108c-.444 0-.72.259-.72.678v9.919zm4.068 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686V7.509c0-.427-.277-.686-.72-.686h-1.708c-.444 0-.72.26-.72.686v8.187zm-8.128 0c0 .426.268.686.712.686h1.716c.435 0 .72-.26.72-.686V9.208c0-.426-.285-.686-.72-.686H5.04c-.444 0-.712.26-.712.686v6.488zm12.196 0c0 .426.277.686.72.686h1.708c.443 0 .72-.26.72-.686v-4.847c0-.418-.277-.686-.72-.686h-1.708c-.443 0-.72.268-.72.686v4.847zM3.642 18.224c0 .376.31.677.686.677h15.344a.682.682 0 100-1.364H4.328a.684.684 0 00-.686.687z"
                  fill="currentColor"></path>
              </svg></div>
            <div style="width: 90%; float: right; text-align: right;">
              <h6 style="font-weight: 800; font-size: 14px;">{{ item.title }}</h6>
              <p style="font-size: 13px;">{{ item.text }}</p>
            </div>
            <div style="clear:both"></div><br>
          </div>
        </div>
      </div>
      <div style="clear:both"></div><br>


      <div style="width: 92%;margin:auto;border-radius: 5px; max-height: 500px; overflow: auto"
        class="lightercard notphone">
        <h6 style="font-weight: 800; font-size: 16px; padding: 4% 3%; float: right">بازارهای معاملاتی </h6>

        <table class="table" style="direction: rtl;text-align: center;">
          <tr style="border-bottom: solid rgba(150, 150, 150, 0.3) 1px">
            <td style="text-align: right; padding: 0% 2% 20px 2%" class="lightertext col-2">بازار</td>
            <td style="text-align: center; padding: 0% 4% 20px 4%" class="lightertext">آخرین قیمت</td>
            <td style="text-align: center; padding: 0% 4% 20px 4%" class="lightertext">تغییرات (24h)</td>
            <td style="text-align: center; padding: 0% 4% 20px 4%" class="lightertext">حجم معاملات (24h)</td>
            <td style="text-align: left; padding: 0% 4% 20px 4%" class="lightertext">تغییرات هفتگی</td>
          </tr>
          <tr style="border-bottom: solid rgba(150, 150, 150, 0.3) 1px">
            <td style="text-align: right; padding: 10px 1% 10px 1%" class="lightertext col-2">
              <div style="width:25%; float:right; text-align: right">
                <img style="width: 24px"
                  src="https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/64/tether.png" alt="" />
              </div>
              <div style="width:75%; float:left; text-align: right;padding-right: 2%">
                <h6 style="margin-top: -2px;font-size: 14px;font-weight: 600">
                  <div class="MuiBox-root mui-k008qs">
                    <span class="normaltext">TMN/</span><span class="lightertext">USDT</span>
                  </div>
                </h6>
                <h6 style="margin-top: -2px;font-size: 11px;font-weight: 600">
                  <div class="MuiBox-root mui-k008qs"><span class="lightertext">تتر</span><span
                      class="normaltext">/تومان</span></div>
                </h6>
              </div>
            </td>
            <td style="text-align: center; padding: 0% 4% 20px 4%" class="lightertext">{{ parseInt(USDTrial)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
            <td style="text-align: center; padding: 0% 4% 20px 4%" class="lightertext">-</td>
            <td style="text-align: center; padding: 0% 4% 20px 4%" class="lightertext">-</td>
            <td style="text-align: left; padding: 0% 4% 20px 4%" class="lightertext">-</td>
          </tr>
          <tr v-for="(item, idx) in markets" style="border-bottom: solid rgba(150, 150, 150, 0.3) 1px">
            <td style="text-align: right; padding: 10px 1% 10px 1%" class="lightertext col-2">
              <div style="width:25%; float:right; text-align: right">
                <img style="width: 24px" class="" :src="`https://amizax.com/icons/color/${item.symbol
                  .replace('USDT', '')
                  .toLowerCase()}.svg`" :onerror="`javascript:this.src='https://amizax.com/icons/color/${item.symbol
    .replace('USDT', '')
    .toLowerCase()}.png';`" alt="" />
              </div>
              <div style="width:75%; float:left; text-align: right;padding-right: 2%">
                <h6 style="margin-top: -2px;font-size: 14px;font-weight: 600">
                  <div class="MuiBox-root mui-k008qs">
                    <span class="normaltext">TMN/</span><span class="lightertext">{{ item.symbol
                      .replace('USDT', '') }}</span>
                  </div>
                </h6>
                <h6 style="margin-top: -2px;font-size: 11px;font-weight: 600">
                  <div class="MuiBox-root mui-k008qs"><span class="lightertext">{{ item.fa_symbol }}</span><span
                      class="normaltext">/تومان</span></div>
                </h6>
              </div>

            </td>
            <td style="text-align: center; padding: 25px 4% 25px 4%" class="lightertext">
              <a v-if="item.rial > 999"> {{ parseInt(item.rial)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</a>
              <a v-else style="text-align: center; padding: 25px 4% 25px 4%" class="lightertext">
                {{ parseFloat(item.rial).toFixed(4) }}</a>
            </td>

            <td style="text-align: center; padding: 25px 4% 25px 4%;" class="lightertext"><span
                class="MuiTypography-root MuiTypography-subtitle2 mui-121v8kr" dir="ltr"><svg width="24" height="24"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.727 14.315l-2.753-2.94-1.68-1.805a1.745 1.745 0 00-2.581 0l-4.441 4.745c-.584.623-.163 1.685.651 1.685h10.152c.823 0 1.235-1.063.652-1.685z"
                    fill="currentColor"></path>
                </svg><a v-if="String(item.change).includes('-')" style="; color:rgb(235, 71, 99)">{{
                  item.change.toFixed(1)
                }}٪</a><a v-else style=" color: #34B288">{{ item.change.toFixed(1) }}٪</a> </span></td>
            <td style="text-align: center; padding: 25px 4% 25px 4%" class="lightertext">{{ parseInt(item.volume) }} </td>
            <td style="text-align: left; padding: 25px 4% 25px 4%" class="lightertext"><span
                class="MuiTypography-root MuiTypography-subtitle2 mui-1h4ro4m" dir="ltr"><svg width="24" height="24"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.073 9H6.925c-.823 0-1.235 1.063-.652 1.685l4.44 4.745c.711.76 1.869.76 2.58 0l4.44-4.745c.574-.623.162-1.685-.66-1.685z"
                    fill="currentColor"></path>
                </svg>-</span></td>
          </tr>
        </table><br><br>
      </div>
      <div style="width: 92%;margin:auto;border-radius: 5px; max-height: 400px; overflow: auto"
        class="lightercard onphone">
        <h6 style="font-weight: 800; font-size: 16px; padding: 4% 3%; float: right">بازارهای معاملاتی </h6>

        <table class="table" style="direction: rtl;text-align: center;">
          <tr style="border-bottom: solid rgba(150, 150, 150, 0.3) 1px">
            <td style="text-align: right; padding: 0% 2% 20px 2% ; width: 33%" class="lightertext col-2">بازار</td>
            <td style="text-align: center; padding: 0% 4% 20px 4%; width: 33%" class="lightertext"> قیمت</td>
            <td style="text-align: left; padding: 0% 4% 20px 4%" class="lightertext"> (24h)</td>
          </tr>
          <tr style="border-bottom: solid rgba(150, 150, 150, 0.3) 1px">
            <td style="text-align: right; padding: 10px 1% 10px 1%" class="lightertext col-2">
              <div style="width:25%; float:right; text-align: right">
                <img style="width: 24px"
                  src="https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/64/tether.png" alt="" />
              </div>
              <div style="width:65%; float:left; text-align: right;padding-right: 2%">
                <h6 style="margin-top: -2px;font-size: 14px;font-weight: 600">
                  <div class="MuiBox-root mui-k008qs">
                    <span class="normaltext">TMN/</span><span class="lightertext">USDT</span>
                  </div>
                </h6>
                <h6 style="margin-top: -2px;font-size: 11px;font-weight: 600">
                  <div class="MuiBox-root mui-k008qs"><span class="lightertext">تتر</span><span
                      class="normaltext">/تومان</span></div>
                </h6>
              </div>
            </td>
            <td style="text-align: center; padding: 25px 0 25px 0" class="lightertext">{{ parseInt(USDTrial)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
            <td style="text-align: left; padding-left: 40px;" class="lightertext"><span
                class="MuiTypography-root MuiTypography-subtitle2 mui-121v8kr" dir="ltr">-</span></td>
          </tr>

          <tr v-for="(item, idx) in markets" style="border-bottom: solid rgba(150, 150, 150, 0.3) 1px">
            <td style="text-align: right; padding: 10px 1% 10px 1%" class="lightertext col-2">
              <div style="width:25%; float:right; text-align: right">
                <img style="width: 24px; margin-left: 3px" class="" :src="`https://amizax.com/icons/color/${item.symbol
                  .replace('USDT', '')
                  .toLowerCase()}.svg`" :onerror="`javascript:this.src='https://amizax.com/icons/color/${item.symbol
    .replace('USDT', '')
    .toLowerCase()}.png';`" alt="" />
              </div>
              <div style="width:65%; float:left; text-align: right;padding-right: 2%">
                <h6 style="margin-top: -2px;font-size: 14px;font-weight: 600">
                  <div class="MuiBox-root mui-k008qs">
                    <span class="normaltext">TMN/</span><span class="lightertext">{{ item.symbol
                      .replace('USDT', '') }}</span>
                  </div>
                </h6>
                <h6 style="margin-top: -2px;font-size: 11px;font-weight: 600">
                  <div class="MuiBox-root mui-k008qs"><span class="lightertext">{{ item.fa_symbol }}</span><span
                      class="normaltext">/تومان</span></div>
                </h6>
              </div>

            </td>
            <td style="text-align: center; padding: 25px 4% 25px 4%" class="lightertext">
              <a v-if="item.rial > 999"> {{ parseInt(item.rial)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</a>
              <a v-else style="text-align: center; padding: 25px 4% 25px 4%" class="lightertext">
                {{ parseFloat(item.rial).toFixed(4) }}</a>
            </td>

            <td style="text-align: left; padding: 25px 25px 25px 25px;" class="lightertext"><span
                class="MuiTypography-root MuiTypography-subtitle2 mui-121v8kr" dir="ltr"><a
                  v-if="String(item.change).includes('-')" style="; color:rgb(235, 71, 99)">{{
                    item.change.toFixed(1)
                  }}٪</a><a v-else style=" color: #34B288">{{ item.change.toFixed(1) }}٪</a></span></td>
          </tr>
        </table><br><br>
      </div>

      <div style="width: 100%;margin:auto;border-radius: 5px">
        <div style="padding-top: 40px;
    padding-bottom: 64px;
    padding-right: 32px;
    padding-left: 32px;">
          <div style="float: right; width: 46%" class="hundred">
            <br>
            <img src="https://wallex.ir/_next/image?url=%2Fimages%2Finvestment-motivation.webp&w=640&q=75"
              style="width: 100%" alt="">
          </div>
          <div style="float: left; width: 54%" class="hundred">
            <h5 style="text-align: right; font-weight: 600;font-size: 25px;" class="lightertext">سرمایه‌گذاری روی
              رمزارزها، سرمایه‌گذاری
              روی آینده</h5>
            <br>
            <h6 style="text-align: right;font-size: 15px;font-weight: 500" class="lightertext">راهی مطمئن برای ورودی مطمئن
              به بازارهای بدون
              مرز جهانی</h6><br>
            <h6 style="text-align: right;font-size: 15px;font-weight: 500" class="lightertext">شفافیت و غیرمتمرکز بودن
              بازار رمزارزها</h6><br>
            <h6 style="text-align: right;font-size: 15px;font-weight: 500" class="lightertext">حفظ ارزش دارایی در برابر
              تورم و بحران‌های
              اقتصادی</h6><br>
            <h6 style="text-align: right;font-size: 15px;font-weight: 500" class="lightertext">تراکنش‌های سریع با کمترین
              کارمزد</h6><br>

          </div>
        </div>

      </div>
      <div style="clear:both"></div>
      <br>

      <div style="width: 100%;margin:auto;border-radius: 5px">
        <div style="padding-top: 10px;
    padding-bottom: 64px;
    padding-right: 32px;
    padding-left: 32px;">
          <div style="float: left; width: 40%" class="hundred">
            <br>
            <img src="https://wallex.ir/_next/image?url=%2Fimages%2Fhow_to_signup.webp&w=384&q=75" style="width: 80%"
              alt="">
          </div>
          <div style="float: right; width: 50% ; padding-top: 5%;" class="hundred">
            <h5 style="text-align: right; font-weight: 500;font-size: 34px" class="lightertext"> چطور ارز دیجیتال بخریم؟
            </h5>
            <br>
            <h4 style="text-align: right;font-size: 16px;font-weight: 600" class="lightertext">ثبت نام در
              والکس در کمتر از ۵ دقیقه</h4>
            <h6 style="text-align: right;font-size: 15px;font-weight: 500" class="lightertext">فرآیند ثبت نام و احراز هویت
              پایه در والکس بسیار سریع است. برای دسترسی به کیف پول و بازارها کافی‌ است ثبت نام اولیه را انجام دهید.</h6>
            <br>

          </div>
        </div>

      </div>

      <div style="clear:both"></div>

      <br><br>


      <div style="padding: 5%" class="lightertext MuiBox-root mui-1fx0y3e">
        <svg style="text-align: right;float:right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-hybm4j" focusable="false" aria-hidden="true"
          viewBox="0 0 24 24">
          <path fill="#4C9AFF" fill-opacity="0.5"
            d="M3.64 8.258l2.58-1.179c.629-.288 1.317.248 1.252.975l-.576 5.387c-.109 1.215.512 3.443 1.55 3.96l3.033 1.51c.732.364.68 1.492-.08 1.778l-3.044 1.146c-1.406.529-2.948-.254-3.45-1.75L2.159 11.88c-.48-1.435.169-3.022 1.483-3.622z">
          </path>
          <path fill="currentColor"
            d="M8.51 4.686c1.315-2.408 3.51-3.143 6.868-2.42l.309.07 1.668.389c4.5 1.052 6.062 3.447 5.11 7.859l-.06.272-.98 4.18c-.88 3.782-2.728 5.51-5.91 5.381l-.25-.012c-.55.34-1.2.638-1.97.909l-.336.114-1.585.521c-4.274 1.378-6.772.173-8.205-3.98l-.088-.263-1.28-3.95C.42 9.475 1.622 6.97 5.766 5.55l1.85-.61.417-.126c.066-.02.13-.038.193-.055l.283-.073zm-.724 1.777l-1.531.505c-3.29 1.122-4.118 2.749-3.103 6.085l.075.241 1.28 3.95c1.136 3.495 2.755 4.39 6.162 3.354l.24-.075 1.582-.52.164-.057-1.132-.27a13.852 13.852 0 01-.963-.269l-.266-.089a9.58 9.58 0 01-.546-.207l-.174-.074-.444-.209-.327-.177-.328-.201-.26-.181-.19-.145-.14-.116-.271-.252-.201-.214-.148-.176-.173-.231-.15-.231-.119-.208-.09-.177-.1-.224-.091-.241-.093-.293-.027-.104a5.271 5.271 0 01-.125-.633 6.391 6.391 0 01-.048-.495l-.01-.256-.003-.21c0-.11.003-.223.008-.337l.01-.165.014-.197c.037-.448.108-.92.212-1.42l.084-.38.98-4.19c.056-.238.114-.465.175-.682l.067-.23zm7.556-2.668c-3.058-.723-4.664-.17-5.655 1.881-.229.466-.43 1.041-.608 1.735l-.075.305-.98 4.19c-.864 3.687.104 5.358 3.676 6.269l1.93.461a10.695 10.695 0 001.248.227l.268.026c2.62.252 3.975-.838 4.753-3.925l.065-.27L21 10.265c.765-3.522-.24-5.14-3.738-6.02l-.248-.06-1.672-.39zM11.758 11.9l.1.018 2.9.74a.75.75 0 01-.27 1.472l-.1-.018-2.9-.74a.75.75 0 01.27-1.472zm.98-3.87l.1.018 4.85 1.23a.75.75 0 01-.269 1.473l-.1-.019-4.85-1.23a.75.75 0 01.268-1.472z">
          </path>
        </svg>
        <h2 style="text-align: right;float:right; font-size: 1.4rem; margin-right: 10px;"
          class="lightertext MuiTypography-root MuiTypography-h5 mui-13uigz3">آخرین مقالات بلاگ</h2>
      </div>

      <div v-for="item in posts" style="width: 92%;margin:auto;border-radius: 5px; text-align: right;">
        <div class="hundred" href="" style="width: 33%; float: right; border-radius: 20px; padding: 2%; padding-top: 0">
          <span
            style="font-size: 10px;color: white ;background-color: rgb(12, 104, 244); padding: 3px; border-radius: 5px;">مطالب
            جدید</span><br><br>
          <h5 class="lightertext" style="font-size: 16px;font-weight: 700">
            {{ item.title }}
          </h5>
          <p class="normaltext" style="font-size: 10px;">{{ item.minitext }}</p>

          <a style="text-decoration: none"
            class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-disableElevation mui-1hgs0o9"
            tabindex="0" target="_blank" rel="noopener"
            aria-label="در مورد ربات تریدر ارزدیجیتال چیست؟ نحوه عملکرد ربات معامله گر (آپدیت ۲۰۲۲) بیشتر بخوانید"
            href="https://wallex.ir/blog/%d8%b1%d8%a8%d8%a7%d8%aa-%d8%aa%d8%b1%db%8c%d8%af%d8%b1-trader-bot-%da%86%db%8c%d8%b3%d8%aa-%d9%88-%da%86%d9%87-%d8%aa%d8%a7%d8%ab%db%8c%d8%b1%db%8c-%d8%a8%d8%b1-%d8%b1%d9%88%db%8c-%d8%a8%d8%a7"><svg
              width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1kcuq0d" focusable="false" aria-hidden="true"
              viewBox="0 0 24 24">
              <path
                d="M10.1 6.46A.75.75 0 109.04 5.4l-6.07 6.07a.75.75 0 000 1.06l6.07 6.07a.75.75 0 101.06-1.06l-4.79-4.79H20.5a.75.75 0 000-1.5H5.31l4.79-4.79z"
                fill="currentColor"></path>
            </svg> خواندن<span class="MuiTouchRipple-root mui-w0pj6f"></span></a>
        </div>


      </div>
      <div style="clear:both"></div>
      <br>

      <div style="width: 98%;margin:auto;border-radius: 5px; text-align: right;">
        <div style="width: 100%; height: 168px; padding: 1%;padding-top: 2%">
          <a class="lightercard hundred" href=""
            style="width: 31%; float: right; border-radius: 10px; padding: 1.5%; margin: 1%; text-decoration: none;border:none">
            <div class="mui-j7qwjs"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                class="lightertext MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-ul0ds4" focusable="false"
                aria-hidden="true" viewBox="0 0 24 24">
                <path fill="#4C9AFF" fill-opacity="0.5"
                  d="M3 16a1 1 0 011-1h5a1 1 0 011 1v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4zm13 0a1 1 0 011-1h5a1 1 0 011 1v4a3 3 0 01-3 3h-1a3 3 0 01-3-3v-4z">
                </path>
                <path fill="currentColor"
                  d="M5.59 22.7c-2.34 0-4.32-1.98-4.32-4.32v-6.16C1.21 9.31 2.3 6.56 4.32 4.49 6.34 2.43 9.06 1.3 11.97 1.3c5.96 0 10.8 4.85 10.8 10.81v6.16c0 2.38-1.94 4.32-4.32 4.32-2.38 0-4.32-1.94-4.32-4.32v-2.81a2.59 2.59 0 012.59-2.59c1.43 0 2.22-.007 4.55-.007v1.507h-1.294c-.41 0-.438.01-1.628 0H16.72c-.68 0-1.09.55-1.09 1.09v2.81c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-6.16c0-5.13-4.17-9.31-9.3-9.31-2.51 0-4.84.97-6.58 2.74-1.74 1.77-2.67 4.14-2.62 6.66v6.17c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-2.81c0-.68-.55-1.09-1.09-1.09-.68 0-.82.03-1.32.03H5c-.5 0-1.82-.02-2.23-.02v-1.507h1.214c1 0 1.886-.003 3.336-.003a2.59 2.59 0 012.59 2.59v2.81a4.33 4.33 0 01-4.32 4.33z">
                </path>
              </svg>
              <br>
              <h3 style="font-size: 14px; margin-top: 10px; font-weight: 600" class="lightertext">پشتیبانی ۲۴ ساعته ۷ روز
                هفته</h3>
              <p style="font-size: 12px; margin-top: 10px; width: 90%; float: right">تیم پشتیبانی همیشه و هر لحظه از
                شبانه‌روز
                پشتیبان شماست.</p>
            </div>
          </a>
          <a class="lightercard hundred" href=""
            style="width: 31%; float: right; border-radius: 10px; padding: 1.5%; margin: 1%; text-decoration: none;border:none">
            <div class="mui-j7qwjs"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                class="lightertext MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-ul0ds4" focusable="false"
                aria-hidden="true" viewBox="0 0 24 24">
                <path fill="#4C9AFF" fill-opacity="0.5"
                  d="M3 16a1 1 0 011-1h5a1 1 0 011 1v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4zm13 0a1 1 0 011-1h5a1 1 0 011 1v4a3 3 0 01-3 3h-1a3 3 0 01-3-3v-4z">
                </path>
                <path fill="currentColor"
                  d="M5.59 22.7c-2.34 0-4.32-1.98-4.32-4.32v-6.16C1.21 9.31 2.3 6.56 4.32 4.49 6.34 2.43 9.06 1.3 11.97 1.3c5.96 0 10.8 4.85 10.8 10.81v6.16c0 2.38-1.94 4.32-4.32 4.32-2.38 0-4.32-1.94-4.32-4.32v-2.81a2.59 2.59 0 012.59-2.59c1.43 0 2.22-.007 4.55-.007v1.507h-1.294c-.41 0-.438.01-1.628 0H16.72c-.68 0-1.09.55-1.09 1.09v2.81c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-6.16c0-5.13-4.17-9.31-9.3-9.31-2.51 0-4.84.97-6.58 2.74-1.74 1.77-2.67 4.14-2.62 6.66v6.17c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-2.81c0-.68-.55-1.09-1.09-1.09-.68 0-.82.03-1.32.03H5c-.5 0-1.82-.02-2.23-.02v-1.507h1.214c1 0 1.886-.003 3.336-.003a2.59 2.59 0 012.59 2.59v2.81a4.33 4.33 0 01-4.32 4.33z">
                </path>
              </svg>
              <br>
              <h3 style="font-size: 14px; margin-top: 10px; font-weight: 600" class="lightertext">پشتیبانی ۲۴ ساعته ۷ روز
                هفته</h3>
              <p style="font-size: 12px; margin-top: 10px; width: 90%; float: right">تیم پشتیبانی همیشه و هر لحظه از
                شبانه‌روز
                پشتیبان شماست.</p>
            </div>
          </a>
          <a class="lightercard hundred" href=""
            style="width: 31%; float: right; border-radius: 10px; padding: 1.5%; margin: 1%; text-decoration: none;border:none">
            <div class="mui-j7qwjs"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                class="lightertext MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-ul0ds4" focusable="false"
                aria-hidden="true" viewBox="0 0 24 24">
                <path fill="#4C9AFF" fill-opacity="0.5"
                  d="M3 16a1 1 0 011-1h5a1 1 0 011 1v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4zm13 0a1 1 0 011-1h5a1 1 0 011 1v4a3 3 0 01-3 3h-1a3 3 0 01-3-3v-4z">
                </path>
                <path fill="currentColor"
                  d="M5.59 22.7c-2.34 0-4.32-1.98-4.32-4.32v-6.16C1.21 9.31 2.3 6.56 4.32 4.49 6.34 2.43 9.06 1.3 11.97 1.3c5.96 0 10.8 4.85 10.8 10.81v6.16c0 2.38-1.94 4.32-4.32 4.32-2.38 0-4.32-1.94-4.32-4.32v-2.81a2.59 2.59 0 012.59-2.59c1.43 0 2.22-.007 4.55-.007v1.507h-1.294c-.41 0-.438.01-1.628 0H16.72c-.68 0-1.09.55-1.09 1.09v2.81c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-6.16c0-5.13-4.17-9.31-9.3-9.31-2.51 0-4.84.97-6.58 2.74-1.74 1.77-2.67 4.14-2.62 6.66v6.17c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-2.81c0-.68-.55-1.09-1.09-1.09-.68 0-.82.03-1.32.03H5c-.5 0-1.82-.02-2.23-.02v-1.507h1.214c1 0 1.886-.003 3.336-.003a2.59 2.59 0 012.59 2.59v2.81a4.33 4.33 0 01-4.32 4.33z">
                </path>
              </svg>
              <br>
              <h3 style="font-size: 14px; margin-top: 10px; font-weight: 600" class="lightertext">پشتیبانی ۲۴ ساعته ۷ روز
                هفته</h3>
              <p style="font-size: 12px; margin-top: 10px; width: 90%; float: right">تیم پشتیبانی همیشه و هر لحظه از
                شبانه‌روز
                پشتیبان شماست.</p>
            </div>
          </a>
        </div>
      </div>
      <div style="clear: both"></div><br><br>

      <div style="width: 90%; margin :auto; border-radius: 20px" class="darkercard ">
        <div class="">
          <div class="mui-1p6hcgo">
            <br>
            <h5 style=" font-weight: 700">!اولین قدم برای
              سرمایه‌گذاری در بازار رمزارزها را بردار</h5>
            <br>
            <a class="btn btn-primary" tabindex="0" id="banner-signup-button" href="/signup"><svg width="24" height="24"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1uzu3hg" focusable="false" aria-hidden="true"
                viewBox="0 0 24 24">
                <path
                  d="M10.1 6.46A.75.75 0 109.04 5.4l-6.07 6.07a.75.75 0 000 1.06l6.07 6.07a.75.75 0 101.06-1.06l-4.79-4.79H20.5a.75.75 0 000-1.5H5.31l4.79-4.79z"
                  fill="currentColor"></path>
              </svg><span class="MuiTypography-root MuiTypography-button2 mui-1a3ay3o">همین حالا ثبت‌نام کن</span><span
                class="MuiTouchRipple-root mui-w0pj6f"></span></a>
          </div>

          <br>
        </div>
      </div>

      <br><br>

      <div class="lightertext"
        style="width: 95%; margin: auto; text-align: right;font-weight: 700; font-size: 16px!important">
        <h5>خرید و فروش ارز دیجیتال</h5><br>

        <h6 style="font-size: 14px ; color: #476185">صرافی والکس از اولین صرافی‌های ارز دیجیتال ایرانی است. این صرافی با
          ارائه خدمات متنوع
          و پشتیبانی 24 ساعته،
          پلتفرمی امن برای مبادلات ارزهای دیجیتال است. چهار سال سابقه در حوزه کریپتوکارنسی، والکس را به یکی از پیشگامان و
          اثر گذاران بر بازار داخلی ارزهای دیجیتال در ایران تبدیل کرده است.
          <br><br>
          والکس، یک پلتفرم آنلاین برای خرید و فروش ارزهای دیجیتال است. این صرافی به‌عنوان یک واسطه میان خریداران و
          فروشندگان ارزهای دیجیتال عمل می‌کند. کاربران در والکس با ارائه نرخ خرید و فروش مورد نظر خود با سایر کاربران
          اقدام به معامله می‌کنند .
        </h6>
      </div>

      <br><br>



    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      general: [],
      topsticker: [],
      bottomsticker: [],
      markets: [],
      USDTprice: 0,
      USDTrial: 0,
      posts: [],
      counter: 0,
      board: [],
    }
  },
  methods: {
    async getGeneral() {
      await axios
        .get('general')
        .then(response => response.data)
        .then(response => {
          this.general = response
        })
    },
    async getTopSticker() {
      await axios
        .get('topsticker')
        .then(response => response.data)
        .then(response => {
          this.topsticker = response
        })
    },
    async getBottomSticker() {
      await axios
        .get('bottomsticker')
        .then(response => response.data)
        .then(response => {
          this.bottomsticker = response
        })
    },
    async getMarkets() {
      await axios
        .get('oltradeinfo4')
        .then(response => response.data)
        .then(response => {
          this.markets = response
          this.count()
        })
    },
    async getUsdtPrice() {
      await axios.post("/cp_ticker", { sym: "USDT" }).then((response) => {
        this.USDTprice = response.data.buy;
        this.USDTrial = response.data.rial
        setTimeout(() => { }, 5000);
      });
    },
    async getPosts() {
      await axios.get("/mainpageposts")
        .then(response => response.data)
        .then((response) => {
          this.posts = response;
          setTimeout(() => { }, 5000);
        });
    },
    count() {
      this.board = this.markets.slice(this.counter, this.counter + 4)
      console.log(this.board)
      if (this.counter > this.markets.length - 4) {
        this.counter = 0
      } else {
        this.counter = this.counter + 4
      }
      setTimeout(() => {
        this.count()
      }, 10000);
    },
  },
  created() {
    this.getGeneral()
    this.getTopSticker()
    this.getBottomSticker()
    this.getMarkets()
    this.getUsdtPrice()
    this.getPosts()

  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a,
h1,
h2,
h3,
h4,
h5,
h6,
td,
th,
p,
span,
button {
  font-family: 'iranyekan-fanum' !important;
}

.h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.svgs {
  fill: currentColor
}

.dark .h1 {
  color: rgb(229, 240, 255)
}
</style>
  