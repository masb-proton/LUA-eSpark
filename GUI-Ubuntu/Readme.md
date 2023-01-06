<!-- Improved compatibility of back to top link: See: https://github.com/masb-espark/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/affansaied/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    How to install LUA socket webhook with webhook.site to verify!
    <br />
    <a href="https://github.com/affansaied/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/affansaied/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/affansaied/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/affansaied/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

## How we can use GUI interfaces in Ubuntu using LUA language

##### followup of https://www.youtube.com/watch?v=Z0TDnnlyscM


##### Download package https://github.com/wxWidgets/wxWidgets/releases/download/v3.0.5/wxWidgets-3.0.5.tar.bz2

Extract to Your Location lets choose Desktop/wxWidgets-3.0.5

Will use Code-Blocks C++ editor install from  
> sudo apt install codeblocks

Next command you need to install 
> sudo apt-get install build-essential

and 
> sudo apt install  libgtk-3-dev

Go to Directory and run these commands Desktop/wxWidgets-3.0.5

> ./configure

>  make

>  sudo make install


Now open the CodeBlock Editor and Create a new project By selecting "EmptyProject"
Now Add a File From File Menu by selecting "c++ source" icon And Name it Main.cpp
Copy the HelloWorld Code in to this file found at the end of the page "https://docs.wxwidgets.org/latest/overview_helloworld.html"

##### Now We have Installed all the requirements it's time to link our libraries


Run this command(cmd) to get the following result 

> wx-config --cxxflags

##### -I/usr/local/lib/wx/include/gtk3-unicode-3.0 -I/usr/local/include/wx-3.0 -D_FILE_OFFSET_BITS=64 -DWXUSINGDLL -D__WXGTK__ -pthread

In CodeBlock Editor Goto Menu Project>Build Options > Other Compiler Options
And Paste the result from cmd


> wx-config --libs

##### -L/usr/local/lib -pthread   -lwx_gtk3u_xrc-3.0 -lwx_gtk3u_html-3.0 -lwx_gtk3u_qa-3.0 -lwx_gtk3u_adv-3.0 -lwx_gtk3u_core-3.0 -lwx_baseu_xml-3.0 -lwx_baseu_net-3.0 -lwx_baseu-3.0 

Do Copy "wx_baseu-3.0 " and "wx_gtk3u_core-3.0"
In CodeBlock Editor Goto Menu Project>Build Options > Linker Settings > Press Add Button and Add Both of them

Now press save all and Reopen the Project and "Build and Run" the project

You will get the Desktop Forms Window on the screen!



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/affansaied/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/affansaied/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/affansaied/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/affansaied/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/affansaied/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/affansaied/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/affansaied/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/affansaied/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/affansaied/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/affansaied/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/affansaied
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
