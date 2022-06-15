import { schema } from 'prosemirror-schema-basic'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import './index.css'

const state = EditorState.create({ schema })
new EditorView(document.querySelector('#editor'), { state })
