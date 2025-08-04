[![Actions Status](https://github.com/karoletrych/vue-cron-editor/workflows/Node%20CI/badge.svg)](https://github.com/karoletrych/vue-cron-editor/actions)
# vue-cron-editor
VueCronEditor is a component library built with Vue allowing for easier editing of cron expressions.

## ✨ Vue 2 & Vue 3 Compatibility

This library now supports both Vue 2 and Vue 3 through [vue-demi](https://github.com/vueuse/vue-demi), making it compatible with any Vue project regardless of version.

### Key Features

- 🔧 **Universal compatibility**: Works with both Vue 2.6+ and Vue 3.0+
- 🎨 **Multiple UI frameworks**: Supports both Vuetify 3 and Buefy 1.0.1
- 📱 **Modern build system**: Built with Vite for optimal performance
- 🎯 **TypeScript support**: Full TypeScript definitions included
- 🧪 **Composition API**: Modern Vue 3 Composition API with Vue 2 compatibility

# Demo
https://karoletrych.github.io/vue-cron-editor/

(The code is here: https://github.com/karoletrych/vue-cron-editor/blob/master/src/App.vue)

# Requirements
- Vue ^2.6.0 || ^3.0.0

# Installation
- vue-cron-editor-buefy 
```bash
npm install vue-cron-editor-buefy --save
```

# Usage

## Vue 3 + Composition API
```vue
<template>
  <div>
    <VueCronEditorBuefy v-model="cronExpression"/>
    {{cronExpression}}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueCronEditorBuefy from 'vue-cron-editor-buefy'

const cronExpression = ref('*/1 * * * *')
</script>
```

## Vue 2 + Options API
```vue
<template>
  <div>
    <VueCronEditorBuefy v-model="cronExpression"/>
    {{cronExpression}}
  </div>
</template>

<script>
import VueCronEditorBuefy from 'vue-cron-editor-buefy';
// or include the vue-cron-editor-buefy.umd.js file and call: 
// Vue.component("vue-cron-editor-buefy", window["vue-cron-editor-buefy"]);

export default {
  name: 'App',
  components: {
    VueCronEditorBuefy
  },
  data: () => ({
      cronExpression: "*/1 * * * *"
  }),
};
</script>
```

## Vue-demi Compatibility

This library uses [vue-demi](https://github.com/vueuse/vue-demi) to provide universal compatibility:

- **Automatic detection**: The library automatically adapts to your Vue version
- **Same API**: Use the same component API regardless of Vue version  
- **Type safety**: Full TypeScript support for both Vue 2 and Vue 3

### Switching Vue Versions (Development)

For development purposes, you can switch between Vue versions:

```bash
# Switch to Vue 2
npm run switch-vue:2

# Switch to Vue 3  
npm run switch-vue:3
```

The editor tab will be set to the one which is able to represent an initial expression given to a ``value`` prop (**minutes** tab in the example above). 
If none of the tabs can represent the given expression then **advanced** tab is selected.

Kind of cron syntax can be selected with ``cronSyntax`` prop. Available: 
  - `basic` (default) - (classic GNU version, 5 digits)
  - `quartz` - (6 digits)


To show only some of the tabs, specify them using `visibleTabs` prop:
```:visibleTabs="['daily', 'weekly', 'monthly']"```
Possible tabs: "minutes", "hourly", "daily", "weekly", "monthly", "advanced".

To preserve expression on switch to **advanced** tab set the `preserveStateOnSwitchToAdvanced` to `true`.

# i18n
The language of the component can be selected with the ``locale`` prop.
```
<VueCronEditorBuefy
    v-model="expression"
    locale="pl"
></VueCronEditorBuefy>
```
Currently supported languages:
- en
- pl
- pt
- it
- es

Custom locales can be provided via a ``customLocales`` prop:
```
<VueCronEditorBuefy
    v-model="expression"
    locale="test"
    :custom-locales="{
    test: {
        every: "Every",
        mminutes: "minute(s)",
        hoursOnMinute: "hour(s) on minute",
        daysAt: "day(s) at",
        at: "at",
        onThe: "On the",
        dayOfEvery: "day, of every",
        monthsAt: "month(s), at",
        everyDay: "Every",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
        sun: "Sun",
        hasToBeBetween: "Has to be between",
        and: "and",
        minutes: "MINUTES",
        hourly: "HOURLY",
        daily: "DAILY",
        weekly: "WEEKLY",
        monthly: "MONTHLY",
        advanced: "ADVANCED",
        cronExpression: "cron expression:"
    }
}"
></VueCronEditorBuefy>
```

# Development
To build the samples app run in root directory:
```
npm install
npm run serve
```
In case you get “$attrs is readonly”,“$listeners is readonly” in console, clean the node_modules in root folder and in src/buefy (it's probably caused by duplicate vue loading by webpack.

To run unit tests:
```
npm run test:unit
```

To release version:
```
cd src/buefy
npm run release:full
npm publish
```
