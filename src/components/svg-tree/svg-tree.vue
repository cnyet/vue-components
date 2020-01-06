<template>
  <svg xmlns="http://www.w3.org/2000/svg">
    <g class="hpo-tree-group">
      <rect class="tree-group-title"
        :x="rectX"
        :y="rectY"
        rx="5"
        ry="5"
        width="120"
        height="30"/>
      <text :x="textX" :y="textY">
        <tspan>{{title}}</tspan>
      </text>
      <g v-for="(item, index) in lists" :key="item.id">
        <cubic-bezier
          :index="index"
          :halfSize="halfSize"
          :topHeight="topHeight"
          :rightHeight="rightHeight"
          :offsetLeft="offsetLeft"
          :distance="distance"
          :item="item">
        </cubic-bezier>
      </g>
    </g>
  </svg>
</template>
<style lang="scss" src="./svg-tree.scss" scoped></style>
<script lang="ts" src="./svg-tree.ts"></script>
