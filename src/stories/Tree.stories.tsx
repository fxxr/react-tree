import React, { CSSProperties } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ReactTree from '../Tree'
import { nodes as testData } from '../mocks/full_list_data'
import type { TreeProps, Node } from 'react-tree'
import './Tree.css'

export default {
  title: 'ReactTree/Tree',
  component: ReactTree,
  argTypes: {
    nodes: {
      name: 'nodes',
      description: 'The data source of your ReactTree component'
    },
    theme: {
      name: 'theme',
      options: ['light', 'dark'],
      control: { type: 'select' },
      description: 'The name of the them you want to use to display your tree'
    },
    grow: {
      name: 'grow',
      control: { type: 'boolean' },
      description: "Whether or not the component tries to fill its container's height"
    }
  }
} as ComponentMeta<typeof ReactTree>

const Template: ComponentStory<typeof ReactTree> = (args: TreeProps) => <ReactTree {...args} />

export const Light = Template.bind({})
Light.args = {
  nodes: testData,
  theme: 'light'
}

export const Dark = Template.bind({})
Dark.args = {
  nodes: testData,
  theme: 'dark'
}

export const WithAnimations = Template.bind({})
WithAnimations.args = {
  nodes: testData,
  theme: 'dark',
  animations: true
}

export const WithControls = Template.bind({})
WithControls.args = {
  nodes: testData,
  theme: 'dark',
  children: ({ toggleOpenCloseAllNodes }) => {
    return <button onClick={() => typeof toggleOpenCloseAllNodes === 'function' && toggleOpenCloseAllNodes()}>Open All Nodes</button>
  }
}

export const CustomNodesAndLeaves = Template.bind({})
CustomNodesAndLeaves.args = {
  nodes: testData,
  theme: 'light',
  NodeRenderer: ({ data, isOpen, level, selected }) => {
    const classes = ['custom-node', isOpen ? 'open' : undefined, selected ? 'selected' : undefined].join(' ')
    return (
      <div className={classes} style={{ width: '100%', ['--icon-pos']: `calc(2px + ${level * 25}px)` } as CSSProperties & { '--icon-pos': string }}>
        <span style={{ paddingLeft: `calc(28px + ${level * 25}px)`, fontStyle: 'italic' }}>{data.label}</span>
      </div>
    )
  },
  LeafRenderer: ({ data, level, selected }) => {
    const classes = ['custom-leaf', selected ? 'selected' : undefined].join(' ')
    return (
      <div className={classes} style={{ width: '100%', ['--icon-pos']: `calc(2px + ${(level + 1) * 25}px)` } as CSSProperties & { '--icon-pos': string }}>
        <span style={{ paddingLeft: `calc(28px + ${(level + 1) * 25}px)` }}>{data.label}</span>
      </div>
    )
  }
}

export const ShowEmptyItems = Template.bind({})
ShowEmptyItems.args = {
  nodes: testData,
  theme: 'dark',
  showEmptyItems: true,
  grow: true
}

export const Grow = Template.bind({})
Grow.args = {
  nodes: testData,
  theme: 'dark',
  grow: true
}

export const NoData = Template.bind({})
NoData.args = {
  nodes: undefined,
  theme: 'light'
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  nodes: undefined,
  theme: 'dark',
  isLoading: true,
  grow: true
}