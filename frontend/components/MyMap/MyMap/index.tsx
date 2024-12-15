import { ISceneConfig, Scene } from "@antv/l7"
import { atom, useAtom } from "jotai"
import { atomFamily } from "jotai/utils"
import { HTMLAttributes, useEffect, useRef } from "react"
import { ScopeProvider } from 'jotai-scope'


type MyMapProps = {
  style: HTMLAttributes<HTMLDivElement>['style']
  scene: ISceneConfig
  children?: React.ReactNode
}

export const myMapSceneAtoms = atomFamily(() => atom<Scene>())
export const myMapSceneIdAtom = atom<string>()

const MyMapScene = ({mapId}: {mapId: string}) => {
  const [myMapSceneId, setMyMapSceneIdAtom] = useAtom(myMapSceneIdAtom)
  useEffect(() => {
    if (!myMapSceneId) {
      setMyMapSceneIdAtom(mapId)
    }
  }, [myMapSceneId, setMyMapSceneIdAtom, mapId])
  return null
}

const MyMap = ({style,scene, children }: MyMapProps) => {
  const mapId = scene.id as string
  const [myMapScene, setMyMapScene] = useAtom(myMapSceneAtoms(scene.id))
  const hasSeated = useRef(false)
  useEffect(() => {
    
    if (hasSeated.current) {
      return
    }
    hasSeated.current = true
    const myScene = new Scene(scene)
    myScene.on('load', () => {
      setMyMapScene(myScene)          
    })

    return () => {
      // TODO how to destory?
      // myScene.destroy()
      // setMyMapScene(undefined)
    }
  }, [myMapScene, setMyMapScene, scene])

  return <ScopeProvider atoms={[myMapSceneIdAtom]}>
      <MyMapScene mapId={mapId} />
      <div id={mapId} style = {style}>
        {myMapScene && children}
      </div>
  </ScopeProvider>
}



export default MyMap