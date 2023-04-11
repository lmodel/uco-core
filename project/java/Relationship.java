package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  A relationship is a grouping of characteristics unique to an assertion that one or more objects are related to another object in some way.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class Relationship extends UcoObject {

  private List<String> endTime;
  private boolean isDirectional;
  private String kindOfRelationship;
  private List<UcoObject> source;
  private List<String> startTime;
  private UcoObject target;

}