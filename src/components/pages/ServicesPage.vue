<template>
  <div id="services">
    <h2>Supported Services</h2>
    <p>There are {{ services.length }} supported services since v1.3.0</p>
    <Loading v-if="loading"/>
    <div v-else>
      <div
        class="service-card"
        :class="service.icon ? 'with-icon' : ''"
        v-for="service in services"
        :key="service.key"
      >
        <img :src="service.icon" v-if="service.icon">
        <div class="card-content">
          <a class="card-title" :href="service.url">{{ service.title }}</a>
          <p>
            Key:
            <code>{{ service.key }}</code>
          </p>
          <p v-if="service.interfaceName">
            Interface Name:
            <code>dbots.{{ service.interfaceName }}</code>
          </p>
          <ul>
            <li v-if="service.docsUrl">
              <a :href="service.docsUrl">API Documentation</a>
            </li>
            <li v-if="service.interfaceName">
              <router-link :to="`/docs/main/v1.3.0/class/${service.interfaceName}`">Interface Source</router-link>
            </li>
            <li v-if="service.invite">
              <a :href="`https://discordapp.com/invite/${service.invite}`">Discord Server Invite</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../Loading.vue';

export default {
  name: 'services',
  props: ['darkMode'],
  components: {
    Loading,
  },

  data() {
    return {
      loading: false,
      services: [
        {
          key: 'topgg',
          interfaceName: 'TopGG',
          title: 'Top.gg (formerly DiscordBots.org)',
          invite: 'EYHTgJX',
          url: 'https://top.gg/',
          docsUrl: 'https://top.gg/api/docs',
          icon: 'https://top.gg/images/dblnew.png',
        },
        {
          key: 'discordbotsgg',
          interfaceName: 'DiscordBotsGG',
          title: 'Discord Bots',
          invite: '0cDvIgU2voWn4BaD',
          url: 'https://discord.bots.gg/',
          docsUrl: 'https://discord.bots.gg/docs',
          icon: 'https://discord.bots.gg/favicon.png',
        },
        {
          key: 'discordappsdev',
          interfaceName: 'DiscordAppsDev',
          title: 'Discord Apps',
          invite: '8uC6aKZ',
          url: 'https://discordapps.dev/',
          docsUrl: 'https://discordapps.dev/en-GB/posts/docs/api-v2/',
          icon: 'https://api.discordapps.dev/img/logo/logo64.png',
        },
        {
          key: 'carbon',
          title: 'Carbonitex',
          invite: 'aerE5tr',
          url: 'http://carbonitex.net/discord/bots',
          icon: 'https://get.snaz.in/7N8ywwr.png',
        },
        {
          key: 'botsfordiscord',
          interfaceName: 'BotsForDiscord',
          title: 'Bots For Discord',
          invite: 'j5SRg4d',
          url: 'https://botsfordiscord.com/',
          docsUrl: 'https://docs.botsfordiscord.com/',
          icon:
            'https://botsfordiscord.com/img/favicons/apple-touch-icon-60x60.png',
        },
        {
          key: 'botsondiscord',
          interfaceName: 'BotsOnDiscord',
          title: 'Bots On Discord',
          invite: 'bvm6vSv',
          url: 'https://bots.ondiscord.xyz/',
          docsUrl: 'https://bots.ondiscord.xyz/info/api',
          icon: 'https://get.snaz.in/5kLF7y2.png',
        },
        {
          key: 'discordbotlist',
          interfaceName: 'DiscordBotList',
          title: 'Discord Bot List',
          invite: 'cc7Y4jX',
          url: 'https://discordbotlist.com/',
          docsUrl: 'https://discordbotlist.com/api-docs',
          icon: 'https://get.snaz.in/5nfV34y.png',
        },
        {
          key: 'divinediscordbots',
          interfaceName: 'DivineDiscordBots',
          title: 'Divine Discord Bots',
          invite: '8b2YahE',
          url: 'https://divinediscordbots.com/',
          docsUrl: 'https://divinediscordbots.com/api',
          icon: 'https://get.snaz.in/9NLpfvh.png',
        },
        {
          key: 'discordboats',
          interfaceName: 'DiscordBoats',
          title: 'Discord Boats',
          invite: 'tfQqub6',
          url: 'https://discord.boats/',
          docsUrl: 'https://docs.discord.boats/',
          icon: 'https://discord.boats/apple-icon-57x57.png',
        },
        {
          key: 'botlistspace',
          interfaceName: 'BotListSpace',
          title: 'botlist.space',
          invite: 'GjEWBQE',
          url: 'https://botlist.space/',
          docsUrl: 'https://docs.botlist.space/',
          icon: 'https://botlist.space/img/apple-touch-icon.png',
        },
        {
          key: 'discordbotworld',
          interfaceName: 'DiscordBotWorld',
          title: 'Discord Bot World',
          invite: 'eneuuys',
          url: 'https://discordbot.world/',
          docsUrl: 'https://discordbot.world/docs',
          icon: 'https://discordbot.world/icons/apple-icon-57x57.png',
        },
        {
          key: 'glennbotlist',
          interfaceName: 'GlennBotList',
          title: 'Glenn Bot List',
          invite: 'QeaNNRW',
          url: 'https://glennbotlist.xyz/',
          docsUrl: 'https://docs.glennbotlist.xyz/',
          icon: 'https://get.snaz.in/8HphUE7.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/animation";
@import "../../styles/theming";
@import "../../styles/mq";

#app.dark .service-card {
  background: $color-inactive-border-dark;
}

#services {
  background: $color-content-bg;
  padding: 10px 0;
  text-align: center;

  .sk-folding-cube {
    margin: 10px;
  }

  .service-card {
    background: $color-inactive-border;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    margin: 20px 15vw;
    min-width: 25%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;

    @include mq($until: tablet) {
      margin: 10px 5vw;
    }

    &.with-icon {
      min-height: 50px;

      .card-content {
        width: calc(100% - 70px);
        min-height: 50px;
      }

      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        float: left;
        display: initial;

        #app.konami & {
          @include prefix(animation, spin ease 1s infinite);
        }
      }
    }

    img {
      display: none;
    }

    .card-content {
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: left;
      padding-left: 20px;

      .card-title {
        font-weight: bold;
        font-size: 16px;
        margin: 0 0 3px 0;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        font-family: $font-header;
        font-size: 16px;
        width: 100%;
        margin: 0 0 5px 0;

        code {
          background: rgba(0, 0, 0, 0.2);
        }
      }

      ul {
        margin: 0;
        list-style-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBkPSJNNCA5aDEydjJINFY5eiIgZmlsbD0iIzYyNjI2MiIvPjwvc3ZnPg==);
        list-style-position: outside;
        padding-left: 20px;
      }
    }
  }
}

#app.dark #services {
  background: $color-content-bg-dark;
  color: $color-content-text-dark;
}
</style>
