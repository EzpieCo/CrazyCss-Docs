---
sidebar_position: 1
---

With CrazyCss, you can add hover effects to your elements.

The hover effect in CrazyCss is similar to the one in [Tailwind CSS](https://tailwindcss.com/).

Just add the **hover:** before any class.

**- **<span class="text-red font-bold">NOTE: There are some classes which don't have hover effects.</span> [Click here](/docs/Effects/hover#classes-with-no-hover-effects) to view the classes without hover effects.

## Text

To apply hover add the **hover:text-{color you want}**

<p class="text-red hover:text-blue">Hover this to change the text color to blue!</p>

```html
<p class="text-red hover:text-blue">
  Hover this to change the text color to blue!
</p>
```

## Background

<div class="bg-green hover:bg-blue p-2 mb-5">
    Hover this to change the background color to blue!
</div>

```html
<div class="bg-green hover:bg-blue">
  Hover this to change the background color to blue!
</div>
```

## Margin and Padding

You can also change the margin and padding with hover effects.

<div class="bg-blue hover:p-3 mb-5">
    Too packed! Hover over me to open up some space.
</div>

```html
<div class="hover:p-3">Too packed! Hover over me to open up some space.</div>
```

<div class="bg-green hover:mb-5">
    Push the div below me far away!
</div>

<div class="bg-blue mb-5">
    Foo and bar
</div>

```html
<div class="hover:mb-5">Push the div below me far away!</div>
```

## Classes with no hover effects

There are some classes that aren't capable of using the 'hover:' effect currently. You can star CrazyCss on [GitHub](https://github.com/ezpieco/crazycss) to stay updated.

Classes that aren't compatible with 'hover:' yet:

- Font
- Typography
- Width and Height
- Border
