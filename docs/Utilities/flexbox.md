---
sidebar_position: 6
---

Manage layout, components and navbars with CrazyCss's flexbox utility classes.

## Add flex behavior

To apply flex behavior in you component, add the **flex** class to them.

<div class="flex bg-gray p-2 text-white mb-5">This is a flexbox component
</div>

```html
<div class="flex">This is a flexbox component</div>
```

<div class="flex-inline bg-gray p-2 text-white mb-5">This is a inline flexbox component
</div>

```html
<div class="flex-inline">This is a inline flexbox component</div>
```

## Directions for you flexbox

You can set the direction of you flexbox with flexbox direction utilities.

To set the direction in a _row_ fashion you can use the **flex-row** and **flex-row-reverse** utility classes.

<div class="flex flex-row bg-gray p-2 mb-5">
    <div class="p-2 border-solid mr-1">Flexbox 1</div>
    <div class="p-2 border-solid mr-1">Flexbox 2</div>
    <div class="p-2 border-solid mr-1">Flexbox 3</div>
    <div class="p-2 border-solid">Flexbox 4</div>
</div>

```html
<div class="flex flex-row">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
  <div>Flexbox 4</div>
</div>
```

<div class="flex flex-row-reverse bg-gray p-2 mb-5">
    <div class="p-2 border-solid ml-1">Flexbox 1</div>
    <div class="p-2 border-solid ml-1">Flexbox 2</div>
    <div class="p-2 border-solid ml-1">Flexbox 3</div>
    <div class="p-2 border-solid">Flexbox 4</div>
</div>

```html
<div class="flex flex-row-reverse">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
  <div>Flexbox 4</div>
</div>
```

Setting for column fashion is also applicable, using **flex-column** and **flex-column-reverse** utility class.

<div class="flex flex-column bg-gray p-2 mb-5">
    <div class="p-2 border-solid mb-1">Flexbox 1</div>
    <div class="p-2 border-solid mb-1">Flexbox 2</div>
    <div class="p-2 border-solid mb-1">Flexbox 3</div>
    <div class="p-2 border-solid">Flexbox 4</div>
</div>

```html
<div class="flex flex-column">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
  <div>Flexbox 4</div>
</div>
```

<div class="flex flex-column-reverse bg-gray p-2 mb-5">
    <div class="p-2 border-solid mt-1">Flexbox 1</div>
    <div class="p-2 border-solid mt-1">Flexbox 2</div>
    <div class="p-2 border-solid mt-1">Flexbox 3</div>
    <div class="p-2 border-solid">Flexbox 4</div>
</div>

```html
<div class="flex flex-column-reverse">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
  <div>Flexbox 4</div>
</div>
```

## Justify contents

With the **justify** utility classes on a flexbox you can change alignment of an element. Choose from **start, end, center, between, evenly and around**

<div class="flex justify-start bg-gray p-2 mb-5">
    <div class="border-solid mr-1 p-1">Flexbox 1</div>
    <div class="border-solid mr-1 p-1">Flexbox 2</div>
    <div class="border-solid mr-1 p-1">Flexbox 3</div>
</div>

```html
<div class="flex justify-start">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

<div class="flex justify-end bg-gray p-2 mb-5">
    <div class="border-solid mr-1 p-1">Flexbox 1</div>
    <div class="border-solid mr-1 p-1">Flexbox 2</div>
    <div class="border-solid p-1">Flexbox 3</div>
</div>

```html
<div class="flex justify-end">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

<div class="flex justify-center bg-gray p-2 mb-5">
    <div class="border-solid mr-1 p-1">Flexbox 1</div>
    <div class="border-solid mr-1 p-1">Flexbox 2</div>
    <div class="border-solid p-1">Flexbox 3</div>
</div>

```html
<div class="flex justify-center">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

<div class="flex justify-evenly bg-gray p-2 mb-5">
    <div class="border-solid mr-1 p-1">Flexbox 1</div>
    <div class="border-solid mr-1 p-1">Flexbox 2</div>
    <div class="border-solid p-1">Flexbox 3</div>
</div>

```html
<div class="flex justify-evenly">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

<div class="flex justify-around bg-gray p-2 mb-5">
    <div class="border-solid mr-1 p-1">Flexbox 1</div>
    <div class="border-solid mr-1 p-1">Flexbox 2</div>
    <div class="border-solid p-1">Flexbox 3</div>
</div>

```html
<div class="flex justify-around">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

## Align item

You can also align items of a flexbox with the **items** utilities. Choose from **start, end, center, baseline, stretch**

<div class="flex bg-gray mb-5 h-3 items-start">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1">
    Flexbox 2
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex items-start">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

<div class="flex bg-gray mb-5 h-3 items-end">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1">
    Flexbox 2
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex items-end">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

<div class="flex bg-gray mb-5 h-3 items-center">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1">
    Flexbox 2
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex items-center">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

<div class="flex bg-gray mb-5 h-3 items-baseline">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1">
    Flexbox 2
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex items-baseline">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

<div class="flex bg-gray mb-5 h-3 items-stretch">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1">
    Flexbox 2
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex items-stretch">
  <div>Flexbox 1</div>
  <div>Flexbox 2</div>
  <div>Flexbox 3</div>
</div>
```

## Align Self
You can also use the **align-self** css property with the **self-** utility classes. Choose from **start, end, center, baseline and stretch**.

<div class="flex bg-gray mb-5 h-3">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1 self-start">
      align self
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex">
    <div>
    Flexbox 1
    </div>
    <div class="self-start">
      align self
    </div>
    <div>
    Flexbox 3
    </div>
</div>
```

<div class="flex bg-gray mb-5 h-3">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1 self-end">
      align self
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex">
    <div>
    Flexbox 1
    </div>
    <div class="self-end">
      align self
    </div>
    <div>
    Flexbox 3
    </div>
</div>
```

<div class="flex bg-gray mb-5 h-3">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1 self-center">
      align self
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex">
    <div>
    Flexbox 1
    </div>
    <div class="self-center">
      align self
    </div>
    <div>
    Flexbox 3
    </div>
</div>
```

<div class="flex bg-gray mb-5 h-3">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1 self-baseline">
      align self
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex">
    <div>
    Flexbox 1
    </div>
    <div class="self-baseline">
      align self
    </div>
    <div>
    Flexbox 3
    </div>
</div>
```

<div class="flex bg-gray mb-5 h-3">
    <div class="border-solid p-1">
    Flexbox 1
    </div>
    <div class="border-solid p-1 self-stretch">
    align self
    </div>
    <div class="border-solid p-1">
    Flexbox 3
    </div>
</div>

```html
<div class="flex">
    <div>
    Flexbox 1
    </div>
    <div class="self-stretch">
    align self
    </div>
    <div>
    Flexbox 3
    </div>
</div>
```

## Wrap flexbox
You can set how the flexbox should wrap. Use **.flex-nowrap** and **.flex-wrap** utilities for the following.

<div class="flex bg-gray mb-5 flex-nowrap w-2">
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
</div>

```html
<div class="flex flex-nowrap w-2">
  <div>Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
</div>
```

<div class="flex bg-gray mb-5 flex-wrap w-5">
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
  <div class="border-solid p-1">Flex item</div>
</div>

```html
<div class="flex flex-wrap w-2">
  <div>Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
  <div>Flex item</div>
</div>
```