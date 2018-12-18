<template>
  <div>
    <div :style="{marginBottom: '16px'}">
      <NebulaInput addonBefore="Http://" addonAfter=".com" defaultValue="mysite"/>
    </div>
    <div :style="{marginBottom: '16px'}">
      <NebulaInput defaultValue="mysite">
        <NebulaSelect slot="addonBefore" defaultValue="Http://" :style="{width: '90px'}">
          <NebulaSelectOption value="Http://">Http://</NebulaSelectOption>
          <NebulaSelectOption value="Https://">Https://</NebulaSelectOption>
        </NebulaSelect>
        <NebulaSelect slot="addonAfter" defaultValue=".com" :style="{width: '80px'}">
          <NebulaSelectOption value=".com">.com</NebulaSelectOption>
          <NebulaSelectOption value=".jp">.jp</NebulaSelectOption>
          <NebulaSelectOption value=".cn">.cn</NebulaSelectOption>
          <NebulaSelectOption value=".org">.org</NebulaSelectOption>
        </NebulaSelect>
      </NebulaInput>
    </div>
    <div :style="{marginBottom: '16px'}">
      <NebulaInput  defaultValue="mysite">
        <NebulaIcon slot="addonAfter" type="setting"/>
      </NebulaInput>
    </div>
  </div>
</template>
