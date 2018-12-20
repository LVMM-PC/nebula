<template>
  <main>
    <section>
      <NebulaTextarea
        placeholder="Autosize height based on content lines" autosize/>
    </section>
    <section>
      <NebulaTextarea
        placeholder="Autosize height with minimum and maximum number of lines"
        :autosize="{minRows: 2, maxRows: 6}"/>
    </section>
  </main>
</template>
