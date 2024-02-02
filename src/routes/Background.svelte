<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import * as THREE from 'three'

  const clock = new THREE.Clock()

  const camera = new THREE.PerspectiveCamera()
  const stars = Array.from({ length: 80 }, () => [
    Math.random() * 40 - 20,
    Math.random() * 20 - 10,
    Math.random() * 40 - 20,
  ])
  console.log(stars)
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
  })
  const geometry = new THREE.BoxGeometry()
</script>

<T.PerspectiveCamera makeDefault position={[10, 0, 10]} fov={50}>
  <OrbitControls enableDamping enableZoom={false} autoRotate rotateSpeed={1} />
</T.PerspectiveCamera>
{#each stars as star}
  <T.Mesh position={star} scale={[0.05, 0.05, 0.05]}>
    <T.BoxGeometry />
    <T.MeshBasicMaterial color="white" emmisive="white" />
  </T.Mesh>
{/each}
