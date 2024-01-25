import { baseKeymap } from 'prosemirror-commands'
import { history, redo, undo } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { schema } from 'prosemirror-schema-basic'
import { EditorStateConfig, EditorState } from 'prosemirror-state'
import { DirectEditorProps, EditorView } from 'prosemirror-view'
import './index.css'


const config: EditorStateConfig = {
    schema,
    plugins: [
        history(),
        keymap({ "Mod-z": undo, "Mod-y": redo }), // custom commands
        keymap(baseKeymap) // merge with standard base
    ]
}
const state = EditorState.create(config)

const props: DirectEditorProps = {
    state,
    dispatchTransaction(transaction) {
        console.log(transaction.before.content.size)
        console.log(transaction.doc.content.size)
        view.updateState(view.state.apply(transaction))
    }
}
const view = new EditorView(document.querySelector('#editor'), props)
