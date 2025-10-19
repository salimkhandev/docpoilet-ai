// import Documents from '../components/Documents' 
import Editor from '../components/Editor'
import ComponentGenerator from '../components/ai/ComponentGenerator'
import Documents from '../components/Documents'


function page() {
  return (
    <div>
        <ComponentGenerator/>
        <Editor/>
        {/* <Documents/> */}
    </div>
  )
}

export default page
