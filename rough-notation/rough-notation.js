<script type="module">
    // Copyright 2022 itdevwu(https://www.itdevwu.com)

    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at

    //     http://www.apache.org/licenses/LICENSE-2.0

    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';

    // Underline all striked objects
    const strikedElements = document.querySelectorAll('s');
    strikedElements.forEach((el) => {
        el.style.textDecoration = 'none';
    });
    const strikedAnnotations = Array.from(strikedElements).map((el) =>
        annotate(el, { type: 'strike-through', color: 'black', animationDuration: 300, padding: [0, 0] })
    );

    // Underline all underlined objects
    const underlinedElements = document.querySelectorAll('u');
    underlinedElements.forEach((el) => {
        el.style.textDecoration = 'none';
    });
    const underlinedAnnotations = Array.from(underlinedElements).map((el) =>
        annotate(el, { type: 'underline', color: '#20beff', animationDuration: 300, padding: [0, 0] })
    );

    // Underline all italic objects
    const italicElements = document.querySelectorAll('i, em');
    italicElements.forEach((el) => {
        el.style.textDecoration = 'none';
    });
    const italicAnnotations = Array.from(italicElements).map((el) =>
        annotate(el, { type: 'box', color: 'purple', animationDuration: 300, padding: [0, 0] })
    );

    // Highlight all bold objects
    const highlightedElements = document.querySelectorAll('b, strong');
    const highlightedAnnotations = Array.from(highlightedElements).map((el) =>
        annotate(el, { type: 'highlight', color: 'yellow', animationDuration: 300, padding: [0, 0] })
    );

    // Show all annotations together
    const ag = annotationGroup([...underlinedAnnotations, ...highlightedAnnotations, ...strikedAnnotations, ...italicAnnotations]);
    ag.show();
</script>
