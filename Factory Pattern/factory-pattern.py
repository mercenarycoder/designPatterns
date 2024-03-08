import json
import xml.etree.ElementTree as et

class Song:
    def __init__(self,song_id,title,artist):
        self.song_id = song_id
        self.title = title
        self.artist = artist
        
class SongSerializer:
    def serialize(self,song,format):   #Client component of Factory pattern
        serializer= _get_serializer(format)
        return serializer(song) # this interface used is Product Component

def _get_serializer(format):  #Creator component
    if format == "JSON":
        return serialize_to_json
    elif format == 'XML':
        return serialize_to_xml
    else:
        raise ValueError(format)
    

def serialize_to_json(song):
    return json.dumps({
            'id':song.song_id,
            'title': song.title,
            'artist':song.artist
    })
def serialize_to_xml(song):
    song_info = et.Element('song',attrib={'id':song.song_id})
    title = et.SubElement(song_info,'title')
    title.text = song.title
    return et.tostring(song_info,encoding='unicode')    

song = Song('2',"Hare Krishna","Krishna")
songSerializer = SongSerializer()
print(songSerializer.serialize(song,"JSON"))
print(songSerializer.serialize(song,"XML"))
            