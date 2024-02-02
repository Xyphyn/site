<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import * as THREE from 'three'

  const repeatNumThree = (num: number): [number, number, number] => [
    num,
    num,
    num,
  ]

  function getRandomStarColor() {
    // Generate a random number between 0 and 1 to determine the dominance of red or blue
    const dominance = Math.random()

    // Set the base color as mostly white
    let color = {
      red: 255,
      green: 255,
      blue: 255,
    }

    // Adjust the color based on the dominance factor
    if (dominance < 0.5) {
      // Add a random amount of red
      color.red = Math.floor(Math.random() * 256)
    } else {
      // Add a random amount of blue
      color.blue = Math.floor(Math.random() * 256)
    }

    // Convert the RGB values to a hexadecimal color code
    const numericColor = (color.red << 16) | (color.green << 8) | color.blue

    return numericColor
  }

  const clock = new THREE.Clock()

  const camera = new THREE.PerspectiveCamera()
  const stars: {
    pos: [number, number, number]
    size: [number, number, number]
    color: number
  }[] = Array.from({ length: 80 }, () => ({
    pos: [
      Math.random() * 40 - 20,
      Math.random() * 20 - 10,
      Math.random() * 40 - 20,
    ],
    size: repeatNumThree(Math.random() * 0.1),
    color: getRandomStarColor(),
  }))
  const geometry = new THREE.BoxGeometry()
</script>

<T.PerspectiveCamera makeDefault position={[10, 0, 10]} fov={50}>
  <OrbitControls enableDamping enableZoom={false} autoRotate rotateSpeed={1} />
</T.PerspectiveCamera>
{#each stars as star}
  <T.Mesh position={star.pos} scale={star.size}>
    <T.BoxGeometry />
    <T.MeshBasicMaterial color={star.color} emmisive="white" />
  </T.Mesh>
{/each}
