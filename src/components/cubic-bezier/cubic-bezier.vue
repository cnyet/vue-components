<template>
  <g class="cubic-bezier">
    <path :d="'M ' + offsetLeft + ','  + halfSize +' '+
        'C ' + halfSize + ','  + halfSize +' '+
        offsetLeft + ',' + yPosition +' '+
        rightHeight + ',' + yPosition" />
    <circle
      fill="#28657B"
      r="4"
      :cx="rightHeight"
      :cy="yPosition">
    </circle>
    <text :x="(rightHeight+15)" :y="(yPosition+5)">{{item.name}}</text>
  </g>
</template>
<style lang="scss" src="./cubic-bezier.scss" scoped></style>
<script lang="ts" src="./cubic-bezier.ts"></script>
