---
layout: index
full_footer: true
sidebar: false
type: ''
---

{% raw %}

<link href="index/app.css" rel="stylesheet">
<div id="vueindex">
    <div class="parallax"></div>
    <section class="intro">
        <h1 id="title">Documentation</h1>
        <p>
            CloudPSS is a modeling and simulation platform for the energy internet. It uses a completely self-developed electromagnetic transient simulation kernel and heterogeneous and parallel computing resources in the cloud. It can provide users with modeling and simulation analysis functions for a variety of energy internet such as hybrid AC-DC grid, renewable energy generation, microgrids, distribution network, heating network, and etc.
        </p>
    </section>
    <section class="links">
        <div class="container center">
            <div class="card-panel" v-for="item in links">
                <span role=img :style="{'background-image': `url(${encodeURI(item.img)})`}"></span>
                <div>
                    <h3>{{item.name}}</h3>
                    <p class="desc">{{item.desc}}</p>
                    <ul>
                        <li v-for="li in item.more" :title="li.name">
                            <a :target="li.openNew ? '_blank' : '_self'" rel="noopener" :href="li.link">{{li.name}}</a>
                            <p>{{li.desc}}</p>
                        </li>
                    </ul>
                </div>
                <a :target="item.action.openNew ? '_blank' : '_self'" :title="item.action.desc" rel="noopener" :href="item.action.link"
                    class="button">{{item.action.name}}</a>
            </div>
        </div>
    </section>
</div>
<script src="index/app.js"></script>

{% endraw %}