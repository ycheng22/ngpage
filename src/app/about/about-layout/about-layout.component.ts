import { Component, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-about-layout',
  standalone: true,
  imports: [FormsModule, MarkdownModule],
  templateUrl: './about-layout.component.html',
  styleUrl: './about-layout.component.scss'
})
export class AboutLayoutComponent {
  angularVersion = VERSION.full;
  ngxMarkdownVersion = '18.0.0';

  // markdown = `# Markdown Example
  // ### Syntax highlight
  // 1. Good
  // 2. Better`;

  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;
}
