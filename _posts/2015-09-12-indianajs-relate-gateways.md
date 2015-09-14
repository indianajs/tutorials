---
author: "Alexandru Miclaus"
title: Implementing RELATE-Gateways with IndianaJS
tags: IndianaJS, RELATE-Gateways, SVG, Spatial Awareness
repository: https://github.com/indianajs/relate-gateways
downloadable: yes
styles: <link rel="stylesheet" type="text/css" href=" https://raw.githubusercontent.com/indianajs/relate-gateways/master/css/relate-gateways.css" media="screen">
---

In this tutorial we will be implementing a classic spatial aware application, the RELATE-Gateways, using IndianaJS. We will discuss all important aspects here, but if you want more information on the the RELATE-Gateways check out the research paper [here](http://link.springer.com/article/10.1007/s00779-008-0206-3). 

Now Let's dig in!

First, let's see what we are building:

<img src="{{site.baseurl}}/img/relate-gateways/app-image.png" alt="app image" style="width: 200px; display:block; margin: auto;"/>

Enabling spatial awareness when working with <span class='indiana-logo'>IndianaJS</span> is quite simple and straightforward because the library takes care of most tasks:

{% highlight js linenos %}
EXAMPLE CODE
{% endhighlight %}

All you need is a website annotated with some semantic tags such as the [Kitchen website] and a way to present the information. In this tutorial we will create RELATE-Gateways.

<div id="pinDemoHtml">
{% highlight html %}
<button onclick="startPinRotationDemo()">Start</button>
<button onclick="stopPinRotationDemo()">Stop</button>

<div id='pngpin' class='relate-pin'>
    <img id='flowerimg' src="./img/flower.png">
    <img id='flowerpin' src="./img/relate-pin.png">
</div>
{% endhighlight %}

<div id='pindemo' style="text-align: center">
    <button onclick="startPinRotationDemo()">Start</button>
    <button onclick="stopPinRotationDemo()">Stop</button>

    <div id='pngpin' class='relate-pin'>
        <img id='flowerimg' src="{{site.baseurl}}/img/flower.png">
        <img id='flowerpin' src="{{site.baseurl}}/img/relate-pin.png">
    </div>
</div>

</div>


{% highlight javascript %}
var flowerPin = document.getElementById('flowerpin');
var rotationAnimation;
var i = 0;

function startPinRotationDemo() {
  rotationAnimation = setInterval(function() {
    flowerPin.style.webkitTransform = 'rotate(' + i + 'deg)';
    i++;
    //reset if we reached the full circle - actually not necessary because of the periodicity of the circle
    if (i > 360) i = 0;
  }, 50);
}
{% endhighlight %}

{% highlight css %}
#flowerpin{
    position: absolute;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 57%;
}

#flowerimg{
    position: absolute;
    height: 70px;
    top: 20px;
    left: 14px;
}
{% endhighlight %}

Check it out and play with it on [Codepen Flower Pin](http://codepen.io/indianajs/pen/ojbZYv).

[Kitchen website]: XXX

For code highlighting:
https://github.com/mojombo/tpw/tree/master/css/syntax.css

{{ page.tags | array_to_sentence_string }}

% include footer.html %}

<script type="text/javascript" src="{{site.baseurl}}/js/demoscripts.js">