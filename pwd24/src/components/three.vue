<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { Stars } from '@tresjs/cientos'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

const gl = {
  clearColor: '#000000',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}
</script>

<template>
  <div class="tres-container">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <Stars />
    </TresCanvas>
  </div>
</template>

<style>
.tres-container {
  width: 100vw;
  height: 100vh;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>