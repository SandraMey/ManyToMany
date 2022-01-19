import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header className="Home-Header">
        <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="147" height="32" viewBox="0 0 147 32"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="5.833" x2="24.203" y1="25.058" y2="9.777"><stop offset="0" stop-color="#0397a7"></stop><stop offset="1" stop-color="#00eccd"></stop></linearGradient><path d="M32.733 12.02L23.915 1.151A2.82 2.82 0 0021.281.144L7.459 2.346a2.82 2.82 0 00-2.19 1.778L.267 17.194c-.36.942-.19 2.003.444 2.785L9.53 30.846a2.82 2.82 0 002.634 1.008l13.82-2.203a2.82 2.82 0 002.19-1.778l5.004-13.067c.36-.942.19-2.004-.444-2.787z" fill="url(#a)"></path><path d="M20.538 9.48l-3.129 5.598-3.075-6.645-3.84 1.023-4.757 12.397H9.98l2.86-7.312 2.82 6.965h2.171l4.172-7.466v9.55l3.96-1.34V10.445z" fill="#fff"></path><path d="M49.827 10.523l-3.185 5.7-3.134-6.767-3.91 1.04-4.844 12.625h4.323l2.913-7.444 2.871 7.093h2.21l4.25-7.602v9.614l4.032-1.364V11.503zm35.056 2.043c-1.562 0-2.875.502-3.941 1.527-1.048 1.005-1.58 2.31-1.58 3.916 0 1.587.532 2.892 1.58 3.897 1.066.983 2.38 1.485 3.96 1.485s2.892-.502 3.94-1.485c1.066-1.005 1.6-2.31 1.6-3.897 0-1.606-.534-2.911-1.6-3.916-1.066-1.025-2.379-1.527-3.959-1.527zm2.12 5.442c0 1.422-.933 2.35-2.102 2.35-1.167 0-2.102-.928-2.102-2.35 0-1.441.933-2.408 2.102-2.408 1.167 0 2.103.967 2.103 2.408zm-12.465-5.432a4.57 4.57 0 01.264-.008c2.376 0 3.396 1.295 3.396 3.565v7.006h-3.842v-6.206c0-.636-.234-1.018-.721-1.018-.446 0-1.347.15-1.899.552v6.674h-3.798V12.783h3.138l.213.776c.628-.396 2.092-.943 3.25-.983zm-17.084 3.429v-2.917l.497-.089c2.962-.536 8.568-1.552 8.57 3.846v6.291h-2.907l-.219-.504s-1.025.773-3.215.773c-2.4 0-3.666-1.657-3.666-3.255 0-2.618 2.311-3.246 4.908-3.246h1.82c0-1.06-.646-1.458-2.003-1.44h.004c-1.914 0-3.446.435-3.784.54h-.005zm3.625 4.928c1.429 0 2.185-.531 2.185-1.725v-.114l-1.724-.015c-1.337 0-1.977.2-1.977.892s.564.961 1.516.961zm76.075-6.84c1.066-1.025 2.379-1.527 3.941-1.527 1.58 0 2.893.502 3.959 1.527 1.067 1.005 1.6 2.31 1.6 3.916 0 1.587-.533 2.892-1.6 3.897-1.047.983-2.361 1.485-3.941 1.485s-2.893-.502-3.959-1.485c-1.048-1.005-1.58-2.31-1.58-3.897 0-1.606.534-2.911 1.58-3.916zm3.961 6.266c1.169 0 2.102-.929 2.102-2.351 0-1.441-.935-2.408-2.102-2.408-1.169 0-2.102.967-2.102 2.408-.002 1.422.933 2.35 2.102 2.35zm-10.364-7.783c.086-.005.174-.008.263-.008 2.378 0 3.396 1.295 3.396 3.564v7.007h-3.842v-6.206c0-.636-.234-1.018-.721-1.018-.446 0-1.346.15-1.898.552v6.674h-3.799V12.783h3.139l.212.776c.628-.396 2.092-.943 3.25-.983zm-24.71-2.053l-3.187 5.7-3.132-6.767-3.91 1.04-4.844 12.625h4.32l2.914-7.445 2.873 7.094h2.21l4.248-7.603v9.615l4.034-1.364V11.503zm7.627 5.482v-2.917l.497-.089c2.962-.536 8.568-1.552 8.569 3.846v6.291h-2.906l-.219-.504s-1.025.773-3.215.773c-2.399 0-3.666-1.657-3.666-3.255 0-2.618 2.311-3.246 4.908-3.246h1.82c0-1.06-.646-1.458-2.003-1.44h.004c-1.914 0-3.446.435-3.784.54h-.005zm3.623 4.927c1.429 0 2.185-.53 2.185-1.724v-.114l-1.724-.015c-1.337 0-1.977.2-1.977.892s.564.961 1.516.961z" fill="#1e3c87"></path></svg>
        </div>
        <h1>
            Welcome to ManoMano
        </h1>
        <a href='https://www.manomano.fr/'>
            <button className="button">Go directly to the site</button>
        </a>
        <p>In order to better support you, you can answer a few questions or go directly to the site.</p>
    </header>
  )
};

export default Header;
