---
author: "Alexandru Miclaus"
title: Implementing RELATE-Gateways with IndianaJS
tags: IndianaJS, RELATE-Gateways, SVG, Spatial Awareness
repository: https://github.com/indianajs/relate-gateways
downloadable: yes
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

<img src="{{site.baseurl}}/img/relate-gateways/app-image.png" alt="app image" style="width: 200px; display:block; margin: auto;"/>


[Kitchen website]: XXX

For code highlighting:
https://github.com/mojombo/tpw/tree/master/css/syntax.css

{{ page.tags | array_to_sentence_string }}

% include footer.html %}