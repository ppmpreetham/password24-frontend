<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

const cameraPosition = ref([0, 0, 5])

onMounted(() => {
  let angle = 0
  const radius = 5
  const animate = () => {
    angle += 0.02
    cameraPosition.value = [
      radius * Math.sin(angle),
      0,
      radius * Math.cos(angle),
    ]
    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<template>
  <div class="tres-container">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="cameraPosition" />
      <Stars />
    </TresCanvas>
  </div>
</template>

<style>
.tres-container {
  width: 100%;
  height: 100vh;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>