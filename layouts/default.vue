<template>
  <a-layout id="components-layout-top-side-2">
    <a-layout-header class="header">
      <a-row>
        <a-col :span="16">
          <div class="logo">
            Kindlib
          </div>
          <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['2']"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1">
              Home
            </a-menu-item>
          </a-menu>
        </a-col>
        <a-col :span="8">
          <a-input-search
            class="nav-search"
            placeholder="input search text"
            enter-button="Search"
            size="large"
            @search="onSearch"
          />
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="1">
            <span><a-icon type="book" /></span>
            All Books
          </a-menu-item>
          <a-menu-item key="2">
            <span><a-icon type="user" /></span>
            Author
          </a-menu-item>
          <a-menu-item key="3">
            <span><a-icon type="printer" /></span>
            Publisher
          </a-menu-item>
          <a-menu-item key="4">
            <span><a-icon type="database" /></span>
            Category
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <br>
        <a-layout-content
          :style="{ background: '#fff', padding: '10px', margin: 0, minHeight: '280px' }"
        >
          <Nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    onSearch() {
      console.log('search worked');
    },
  },
};

</script>

<style>
#components-layout-top-side-2 .logo {
  margin-right: 50px;
  float: left;
}

#components-layout-top-side-2{
  height: 100vh;
}

.logo{
  color: white;
  size: 200px;
}
.nav-search{
  margin-top:10px;
}
</style>
