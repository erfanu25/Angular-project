import {MenuItem, MessageService, TreeDragDropService, TreeNode} from 'primeng/api';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Tree} from 'primeng/tree';
import {NodeService} from '../services/NodeService';

@Component({
  templateUrl: './filter.html',
  styles: [`
        h4 {
            text-align: center;
            margin: 0 0 8px 0;
        }
        .ui-inputtext {
            padding-top: 0;
            padding-bottom: 0;
            font-size: 12px;
        }
    `],
  providers: [TreeDragDropService, MessageService]
})

export class TreeDemo implements OnInit {

  @ViewChild('expandingTree', { static: false })
  expandingTree: Tree;

  filesTree1: TreeNode[];
  filesTree2: TreeNode[];

  lazyFiles: TreeNode[];

  selectedFile3: TreeNode;

  items: MenuItem[];

  loading: boolean;

  constructor(private nodeService: NodeService, private messageService: MessageService) { }

  ngOnInit() {
    this.filesTree1 = [{
      label: 'Documents',
      data: 'Documents Folder',
      expandedIcon: 'fa fa-folder-open',
      collapsedIcon: 'fa fa-folder',
      children: [
        {
          label: 'Work',
          data: 'Work Folder',
          expandedIcon: 'fa fa-folder-open',
          collapsedIcon: 'fa fa-folder',
          children: [
            {
              label: 'Expenses.doc',
              icon: 'fa fa-file-word-o',
              data: 'Expenses Document'
            },
            {
              label: 'Resume.doc',
              icon: 'fa fa-file-word-o',
              data: 'Resume Document'
            }
          ]
        },
        {
          label: 'Home',
          data: 'Home Folder',
          expandedIcon: 'fa fa-folder-open',
          collapsedIcon: 'fa fa-folder',
          children: [
            {
              label: 'Invoices.txt',
              icon: 'fa fa-file-word-o',
              data: 'Invoices for this month'
            }
          ]
        }
      ]
    },
      {
        label: 'Pictures',
        data: 'Pictures Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          {
            label: 'barcelona.jpg',
            icon: 'fa fa-file-image-o',
            data: 'Barcelona Photo'
          },
          {
            label: 'logo.jpg',
            icon: 'fa fa-file-image-o',
            data: 'PrimeFaces Logo'
          },
          {
            label: 'primeui.png',
            icon: 'fa fa-file-image-o',
            data: 'PrimeUI Logo'
          }
        ]
      },
      {
        label: 'Movies',
        data: 'Movies Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          {
            label: 'Al Pacino',
            data: 'Pacino Movies',
            children: [
              {
                label: 'Scarface',
                icon: 'fa fa-file-video-o',
                data: 'Scarface Movie'
              },
              {
                label: 'Serpico',
                icon: 'fa fa-file-video-o',
                data: 'Serpico Movie'
              }
            ]
          },
          {
            label: 'Robert De Niro',
            data: 'De Niro Movies',
            children: [
              {
                label: 'Goodfellas',
                icon: 'fa fa-file-video-o',
                data: 'Goodfellas Movie'
              },
              {
                label: 'Untouchables',
                icon: 'fa fa-file-video-o',
                data: 'Untouchables Movie'
              }
            ]
          }
        ]
      }];
    this.filesTree2 = [
      {
        label: 'Root',
        data: 'Documents Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
      {
        label: 'Documents',
        data: 'Documents Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          {
            label: 'Work',
            data: 'Work Folder',
            expandedIcon: 'fa fa-folder-open',
            collapsedIcon: 'fa fa-folder',
            children: [
              {
                label: 'Expenses.doc',
                icon: 'fa fa-file-word-o',
                data: 'Expenses Document'
              },
              {
                label: 'Resume.doc',
                icon: 'fa fa-file-word-o',
                data: 'Resume Document'
              }
            ]
          },
          {
            label: 'Home',
            data: 'Home Folder',
            expandedIcon: 'fa fa-folder-open',
            collapsedIcon: 'fa fa-folder',
            children: [
              {
                label: 'Invoices.txt',
                icon: 'fa fa-file-word-o',
                data: 'Invoices for this month'
              }
            ]
          }
        ]
      },
      {
        label: 'Pictures',
        data: 'Pictures Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          {
            label: 'barcelona.jpg',
            icon: 'fa fa-file-image-o',
            data: 'Barcelona Photo'
          },
          {
            label: 'logo.jpg',
            icon: 'fa fa-file-image-o',
            data: 'PrimeFaces Logo'
          },
          {
            label: 'primeui.png',
            icon: 'fa fa-file-image-o',
            data: 'PrimeUI Logo'
          }
        ]
      },
      {
        label: 'Movies',
        data: 'Movies Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          {
            label: 'Al Pacino',
            data: 'Pacino Movies',
            children: [
              {
                label: 'Scarface',
                icon: 'fa fa-file-video-o',
                data: 'Scarface Movie'
              },
              {
                label: 'Serpico',
                icon: 'fa fa-file-video-o',
                data: 'Serpico Movie'
              }
            ]
          },
          {
            label: 'Robert De Niro',
            data: 'De Niro Movies',
            children: [
              {
                label: 'Goodfellas',
                icon: 'fa fa-file-video-o',
                data: 'Goodfellas Movie'
              },
              {
                label: 'Untouchables',
                icon: 'fa fa-file-video-o',
                data: 'Untouchables Movie'
              }
            ]
          }
        ]
      }
   ]} ];
    this.loading = true;
    setTimeout(() => {
      this.nodeService.getFiles().then(files => this.filesTree1 = files);
      this.loading = false;
    }, 3000);

    this.nodeService.getLazyFiles().then(files => this.lazyFiles = files);

    this.items = [
      {label: 'View', icon: 'fa fa-search', command: (event) => this.viewFile(this.selectedFile3)},
      {label: 'Unselect', icon: 'fa fa-close', command: (event) => this.unselectFile()}
    ];
  }

  nodeSelect(event) {
    this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
  }

  nodeUnselect(event) {
    this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
  }

  nodeExpandMessage(event) {
    this.messageService.add({severity: 'info', summary: 'Node Expanded', detail: event.node.label});
  }

  viewFile(file: TreeNode) {
    this.messageService.add({severity: 'info', summary: 'Node Selected with Right Click', detail: file.label});
  }

  unselectFile() {
    this.selectedFile3 = null;
  }
}
