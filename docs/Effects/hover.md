---
sidebar_position: 1
---

With CrazyCss you can add hover effects to you elements.

Hover effect in CrazyCss is kind of same as in [tailwind](https://tailwindcss.com/).

Just add the **hover:** before any class.

<p class="text-red"><b>NOTE:</b> There are some classes which don't have hover effects</p>

## Text
To apply hover add the **hover:text-{color you want}**

<p class="text-red hover:text-blue">Hover it to change into blue</p>

```html
<p class="text-red hover:text-blue">Hover it to change into blue</p>
```

## Background

<div class="bg-green hover:bg-blue p-2 mb-5">
    Change me into blue
</div>

```html
<div class="bg-green hover:bg-blue">
    Change me into blue
</div>
```

## Margin and Padding
You can also change the margin and padding with hover effects

<div class="bg-blue hover:p-3 mb-5">
    To packed. Hover over me to open up some space
</div>

```html
<div class="hover:p-3">
    To packed. Hover over me to open up some space
</div>
```

<div class="bg-green hover:mb-5">
    Push the div below me far away
</div>

<div class="bg-blue mb-5">
    Foo and bar
</div>

```html
<div class="hover:mb-5">
    Push the div below me far away
</div>
```

## Classes with no hover effects
There are some classes with still don't have any hover effect for now. You can start star CrazyCss in [GitHub](https://github.com/ezpieco/crazycss), to stay updated.

Classes with no hover effects yet:

- Font
- Typography
- Width and Height
- Border
