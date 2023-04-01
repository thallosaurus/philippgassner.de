<template>
    <section class="pad" id="skills">
        <h1>Skills</h1>
        <div class="grid-parent">

            <!-- <ul> -->
            <li data-icon="docker">
                <span class="title">Docker</span>
                <p>Since: 2021</p>
                <p>Familiarity: 2.5/3</p>
            </li>
            <li data-icon="nodejs" style="float: right">
                <span class="title">NodeJS</span>
                <p>Since: 2018</p>
                <p>Familiarity: 2.5/3</p>
                <p>
                    <a href="http://npmjs.com">NPM</a>
                </p>
            </li>
            <li data-icon="typescript">
                <span class="title">TypeScript</span>
                <p>Since: 2020</p>
                <p>Familiarity: 2.5/3</p>
            </li>
            <li data-icon="swift">
                <span class="title">Swift</span>
                <p>Since: 2022</p>
                <p>Familiarity: 1/3</p>
            </li>
            <li data-icon="swiftui">
                <span class="title">SwiftUI</span>
                <p>Since: 2022</p>
                <p>Familiarity: 1/3</p>
            </li>
            <li data-icon="sqlite">
                <span class="title">SQLite</span>
                <p>Since: 2020</p>
                <p>Familiarity: 2/3</p>
            </li>
            <li data-icon="mysql">
                <span>MySQL</span>
                <p>Since: 2019</p>
                <p>Familiarity: 2/3</p>
            </li>
            <li data-icon="html5">
                <span class="title">HTML5</span>
                <p>Since: 2016</p>
                <p>Familiarity: 3/3</p>
            </li>
            <li data-icon="css3">
                <span class="title">CSS3</span>
                <p>Since: 2016</p>
                <p>Familiarity: 3/3</p>
            </li>
            <li data-icon="php">
                <span class="title">PHP</span>
                <p>Since: 2019</p>
                <p>Familiarity: 2.5/3</p>
            </li>
            <li data-icon="java">
                <span class="title">Java</span>
                <p>Since: 2017</p>
                <p>Familiarity: 2/3</p>
            </li>
            <li data-icon="javascript">
                <span class="title">JavaScript</span>
                <p>Since: 2017</p>
                <p>Familiarity: 3/3</p>
            </li>
            <li data-icon="archlinux">
                <span>Arch Linux (btw)</span>
                <p>Since: 2019</p>
                <p>Familiarity: 2/3</p>
            </li>
            <li data-icon="arduino">
                <span>Arduino</span>
                <p>Since: 2020</p>
                <p>Familiarity: 1/3</p>
            </li>
            <!-- </ul> -->
        </div>
    </section>
</template>

<style scoped>
.grid-parent {
    /* padding-top: 2em; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.grid-parent>* {
    padding: 2em;
    /* border-radius: 10px; */
}

#skills li p {
    margin-inline-start: 2.5em;
}

#skills li.small p {
    margin-inline-start: 1.5em;
}

#skills li p {
    /* font-size: 1em; */
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
}

li span {}

li {
    list-style: none;
    background-blend-mode: darken;
    /*     backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); */

    transition: all .1s linear;
}

/* li:hover {
    background-color: rgba(255, 255, 255, 0) !important;
} */

li::before {
    content: " ";
    display: inline-block;
    width: 2.5em;
    height: 2.5em;
    vertical-align: middle;
    padding-right: 0.5em;

    background-size: 2.5em;
    background-repeat: no-repeat;
}
</style>