<template>
  <div id="home">
    <slide id="jumbotron">
      <img src="/static/logo.png">
      <br>
      <br>
      <br>
      <div class="cli-command">
        <code>{{ yarn ? 'yarn add' : 'npm i' }} {{ showDevCommand ? (yarn ? `ssh://github.com/${repo}#master` : `${repo}#master`) : 'dbots' }}</code>
        <em v-on:click="copy" class="fa fa-clipboard"></em>
      </div>
      <div class="below-command">
        <span v-on:click="toggleDev">{{ showDevCommand ? 'stable' : 'master' }}</span>
        <span v-on:click="toggleYarn">{{ yarn ? 'npm' : 'yarn' }}</span>
      </div>
      <br>
    </slide>

    <section id="info">
      <div class="info-item">
        <h2>About</h2>
        <p>dbots is a package that allows you to automatically post your bot stats to multiple bot lists.</p>
        <p>The module also provides some interfaces for other requests to the list APIs, so that everything can be done with the same package, instead of having to make the requests youself or dealing with multiple packages.</p>
      </div>

      <div class="info-item">
        <h2>Example</h2>
        <pre><code class="javascript" v-hljs>const Discord = require('discord.js');
const client = new Discord.Client();
const dbots = require('dbots');
const poster = new dbots.Poster({
    client, // Client MUST be logged in to be put into a poster
    apiKeys: {
        discordbotsgg: '…',
        topgg: '…',
        lsterminalink: '…',
        carbon: '…'
    },
    clientLibrary: 'discord.js'
});

poster.startInterval(); // starts an interval thats posts to all services every 30 minutes</code></pre>
      </div>

      <div class="info-item">
        <h2>Statistics</h2>
        <p>
          <stats show-as-cards="true"/>
        </p>
        <p class="center">...and growing!</p>
      </div>

      <div class="full-info-item">
        <router-link to="/docs" class="big-ass-btn">Get started</router-link>
        <router-link to="/services" class="big-ass-btn">Supported Services</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Stats from '../Stats.vue';
import MainSource from '../../data/MainSource';

export default {
  name: 'home',
  props: ['konami'],
  components: {
    Stats,
  },

  mounted() {
    this.$emit('setRepository', MainSource.repo);
  },

  data() {
    return {
      showDevCommand: false,
      yarn: false,
      repo: MainSource.repo,
    };
  },

  methods: {
    copy() {
      window.getSelection().removeAllRanges();
      let range = document.createRange();
      range.selectNode(this.$el.querySelector('.cli-command code'));
      window.getSelection().addRange(range);
      document.execCommand('copy');
    },

    toggleDev() {
      this.showDevCommand = !this.showDevCommand;
    },

    toggleYarn() {
      this.yarn = !this.yarn;
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/animation";
@import "../../styles/theming";
@import "../../styles/mq";

#home {
  text-align: center;
  background: $color-content-bg;
  color: $color-content-text;

  #app.dark & {
    background: $color-content-bg-dark;
    color: $color-content-text-dark;

    pre {
      background: lighten($color-content-bg-dark, 4%);
      color: darken($color-content-text-dark, 20%);
    }
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    font-weight: 600;
    letter-spacing: -1px;
  }

  p {
    font-size: 1rem;
    line-height: 2rem;
    text-align: left;

    @include mq($until: tablet) {
      margin: 0 1rem;
    }

    & > a {
      font-weight: bold;
    }

    &.center {
      text-align: center;
    }
  }

  #jumbotron {
    flex: 0 0 100%;
    padding: 80px 16px;
    overflow: hidden;
    background-color: $color-primary;
    background-image: linear-gradient(
      top,
      $color-primary,
      darken($color-primary, 15%)
    );

    img {
      width: 100%;
      max-height: 300px;
      max-width: 369px;
      @include prefix(animation, fadeInDown ease 1s);

      @include mq($until: 416px) {
        width: 100%;
        height: unset;
      }

      #app.konami & {
        @include prefix(animation, logo-konami linear 1s infinite);
      }
    }

    .cli-command {
      display: inline-block;
      border-radius: 5px;
      overflow: hidden;
      @include prefix(animation, fadeInUp ease 1s);

      code {
        padding: 16px;
        background: #f5f5f5;
        color: $color-content-text;
        font-family: $font-monospace;
      }

      em {
        padding: 16px;
        background: #e2e2e2;
        color: $color-content-text;
        @include prefix(transition, background 0.2s ease);
        cursor: pointer;

        &:hover {
          background: #b9b9b9;
          @include prefix(transition, background 0.2s ease);
        }
      }
    }

    .below-command {
      @include prefix(animation, fadeInUp ease 1s);

      span {
        font-family: monospace;
        color: white;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        & + span {
          margin-left: 15px;

          &:before {
            content: '/';
            display: inline-block;
            text-decoration: none;
            pointer-events: none;
            position: absolute;
            margin-left: -12px;
            margin-top: 3px;
          }
        }
      }
    }
  }

  #info {
    display: flex;
    flex-flow: row wrap;
    margin: 64px auto 0 auto;
    max-width: 1120px;

    @include mq($until: tablet) {
      margin: 32px auto 0 auto;
    }
  }

  .info-item {
    flex: 1 1 45%;
    padding: 24px;

    ul {
      display: inline-block;
      margin: 0 auto;
      text-align: left;
    }

    pre {
      padding: 8px;
      border-radius: 4px;
      text-align: left;
      font-size: 0.875rem;
      background: #f0f0f0;
    }
  }

  .full-info-item {
    flex: 1 0 100%;
    margin: 48px 0;
  }

  .big-ass-btn {
    display: inline-block;
    padding: 12px 10px;
    border-radius: 4px;
    background: $color-primary;
    color: white;
    font-size: 1.1rem;

    &:hover {
      background: lighten($color-primary, 10%);
    }

    &:not(:first-of-type) {
      margin-left: 8px;
    }

    &.discord {
      background-color: #7289da;

      &:hover {
        background: lighten(#7289da, 10%);
      }
    }
  }
}

@include keyframes(logo-konami) {
  from {
    @include prefix(filter, contrast(0.4) sepia() drop-shadow(0 0 10px white) brightness(1.5) hue-rotate(0deg));
  }
  50% {
    @include prefix(filter, contrast(0.4) sepia() drop-shadow(0 0 20px white) brightness(1.5) hue-rotate(180deg));
  }
  to {
    @include prefix(filter, contrast(0.4) sepia() drop-shadow(0 0 10px white) brightness(1.5) hue-rotate(360deg));
  }
}

@include keyframes(fadeInDown) {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@include keyframes(fadeInUp) {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
