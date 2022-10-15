import{_ as s,c as a,o as e,a as n}from"./app.44426f90.js";const C=JSON.parse('{"title":"Templating - SEO Fields","description":"","frontmatter":{"title":"Templating - SEO Fields","prev":false,"next":false},"headers":[{"level":2,"title":"Template hook","slug":"template-hook","link":"#template-hook","children":[]},{"level":2,"title":"Overwriting field values","slug":"overwriting-field-values","link":"#overwriting-field-values","children":[]},{"level":2,"title":"Support for custom elements","slug":"support-for-custom-elements","link":"#support-for-custom-elements","children":[]}],"relativePath":"templating.md"}'),o={name:"templating.md"},l=n(`<h1 id="templating" tabindex="-1">Templating <a class="header-anchor" href="#templating" aria-hidden="true">#</a></h1><h2 id="template-hook" tabindex="-1">Template hook <a class="header-anchor" href="#template-hook" aria-hidden="true">#</a></h2><p>To put SEO Fields on your html, just add <code>{% hook &#39;seo-fields&#39; %}</code> within the <code>&lt;head&gt;</code> tag in your layout.</p><p>If you want more control over what the plugin output, you can include your own snippet instead of the templat hook. Have a look at the <a href="https://github.com/studioespresso/craft-seo-fields/blob/master/src/templates/_meta.twig" target="_blank" rel="noreferrer">default template</a> to get you started.</p><p>Note that the field looks for a field called <code>seo</code>. If it doesn&#39;t find that, it will not output anymore.</p><p><a href="./field.html#field">More information on that here.</a></p><h2 id="overwriting-field-values" tabindex="-1">Overwriting field values <a class="header-anchor" href="#overwriting-field-values" aria-hidden="true">#</a></h2><p>Next to the site defaults and the field, you might also want to use text and images from another fields.</p><p>To do this, use the following twig functions:</p><div class="language-twig"><button class="copy"></button><span class="lang">twig</span><pre><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setMetaTitle</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">New title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setMetaDescription</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom meta description</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setFacebookTitle</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Facebook title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setFacebookDescription</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom description</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setTwitterTitle</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Twitter title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setTwitterDescription</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Just for twitter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// Overwriting the image fields can be done with an AssetQuery, an Asset itself, or with and Asset id</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setFacebookImage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">assetField</span><span style="color:#89DDFF;">) %}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">do</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">seo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">setTwitterImage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">assetField</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">one</span><span style="color:#89DDFF;">()) %}</span></span>
<span class="line"></span></code></pre></div><p>This is a normal Twig template so the usual conditionals and operators work here. You can use these for the fields that need a text value. For the OG and Twitter images, you can pass an <code>Asset</code> to <code>meta.getOgImage()</code>, eg: <code>{% set ogImage = meta.getOgImage(entry.overviewImage.one()) %}</code>.</p><h2 id="support-for-custom-elements" tabindex="-1">Support for custom elements <a class="header-anchor" href="#support-for-custom-elements" aria-hidden="true">#</a></h2><p>Out of the box SEO Fields has support for:</p><ul><li>Craft&#39;s Entries</li><li>Craft&#39;s Categories</li><li>Commerce <a href="https://plugins.craftcms.com/commerce" target="_blank" rel="noreferrer">Products</a></li><li>Solspce Calendar <a href="https://plugins.craftcms.com/calendar" target="_blank" rel="noreferrer">Events</a></li></ul><p><em>If you have a plugin on the store that has a custom element and you want SEO Fields to add support for it, feel free to <a href="mailto:jan@studioespresso.co" target="_blank" rel="noreferrer">get in touch</a></em></p><p>If you have a custom element of your own and you want to add support for SEO Fields, pass the element&#39;s class to the following event:</p><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#FFCB6B;">Event</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">on</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">SeoFields</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SeoFields</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">EVENT_SEOFIELDS_REGISTER_ELEMENT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">RegisterSeoElementEvent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">elements</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">elements </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">array_merge</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">elements</span><span style="color:#89DDFF;">,[</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">Product</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,17),t=[l];function p(r,c,D,F,y,i){return e(),a("div",null,t)}const A=s(o,[["render",p]]);export{C as __pageData,A as default};