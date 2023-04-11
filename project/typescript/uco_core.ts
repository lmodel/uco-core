/**
 * An annotation is an assertion made in relation to one or more objects.
 */
export interface Annotation  extends Assertion  {
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * A textual statement of an assertion.
     */statement?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An assertion is a statement declared to be true.
 */
export interface Assertion  extends UcoObject  {
    /**
     * A textual statement of an assertion.
     */statement?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An attributed name is a name of an entity issued by some attributed naming authority.
 */
export interface AttributedName  extends UcoObject  {
    /**
     * Specifies the naming authority that issued the name of the entity.
     */namingAuthority?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A bundle is a container for a grouping of UCO content with no presumption of shared context.
 */
export interface Bundle  extends EnclosingCompilation  {
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A compilation is a grouping of things.
 */
export interface Compilation  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A confidence is a grouping of characteristics unique to an asserted level of certainty in the accuracy of some information.
 */
export interface ConfidenceFacet  extends Facet  {
    /**
     * An asserted level of certainty in the accuracy of some information.
     */confidence?: string,
}
/**
 * A contextual compilation is a grouping of things sharing some context (e.g., a set of network connections observed on a given day, all accounts associated with a given person).
 */
export interface ContextualCompilation  extends Compilation  {
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A controlled vocabulary is an explicitly constrained set of string values.
 */
export interface ControlledVocabulary  extends UcoObject  {
    /**
     * A reference to a specification for an explicitly constrained set of string values. The specification may be unstructured (e.g., web page listing string values) or structured (e.g. RDF/OWL enumeration).
     */constrainingVocabularyReference?: string,
    /**
     * The name of an explicitly constrained set of string values.
     */constrainingVocabularyName?: string,
    /**
     * A string value.
     */value?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An enclosing compilation is a container for a grouping of things.
 */
export interface EnclosingCompilation  extends Compilation  {
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * Characteristics of a reference to a resource outside of the UCO.
 */
export interface ExternalReference  extends UcoInherentCharacterizationThing  {
    /**
     * A URL for some information defined external to the UCO context.
     */referenceURL?: string,
    /**
     * A description of the context relevant to the definition of a particular external reference identifier.
     */definingContext?: string,
    /**
     * An identifier for some information defined external to the UCO context.
     */externalIdentifier?: string,
}
/**
 * A facet is a grouping of characteristics singularly unique to a particular inherent aspect of a UCO domain object.
 */
export interface Facet  extends UcoInherentCharacterizationThing  {
}
/**
 * A grouping is a compilation of referenced UCO content with a shared context.
 */
export interface Grouping  extends ContextualCompilation  {
    /**
     * A description of particular contextual affinity.
     */context?: string,
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An identity abstraction is a grouping of identifying characteristics unique to an individual or organization. This class is an ontological structural abstraction for this concept. Implementations of this concept should utilize the identity:Identity class.
 */
export interface IdentityAbstraction  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An item is a distinct article or unit.
 */
export interface Item  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A marking definition abstraction is a grouping of characteristics unique to the expression of a specific data marking conveying restrictions, permissions, and other guidance for how marked data can be used and shared. This class is an ontological structural abstraction for this concept. Implementations of this concept should utilize the marking MarkingDefinition class.
 */
export interface MarkingDefinitionAbstraction  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A modus operandi is a particular method of operation (how a particular entity behaves or the resources they use).
 */
export interface ModusOperandi  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A relationship is a grouping of characteristics unique to an assertion that one or more objects are related to another object in some way.
 */
export interface Relationship  extends UcoObject  {
    /**
     * The ending time of a time range.
     */endTime?: string,
    /**
     * A specification whether or not a relationship assertion is limited to the context FROM a source object(s) TO a target object.
     */isDirectional?: string,
    /**
     * A characterization of the nature of a relationship between objects.
     */kindOfRelationship?: string,
    /**
     * The originating node of a specified relationship.
     */source?: UcoObject[],
    /**
     * The initial time of a time range.
     */startTime?: string,
    /**
     * The terminating node of a specified relationship.
     */target?: UcoObject,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A UCO inherent characterization thing is a grouping of characteristics unique to a particular inherent aspect of a UCO domain object.
 */
export interface UcoInherentCharacterizationThing  extends UcoThing  {
}
/**
 * A UCO object is a representation of a fundamental concept either directly inherent to the cyber domain or indirectly related to the cyber domain and necessary for contextually characterizing cyber domain concepts and relationships. Within the Unified Cyber Ontology (UCO) structure this is the base class acting as a consistent, unifying and interoperable foundation for all explicit and inter-relatable content objects.
 */
export interface UcoObject  extends UcoThing  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * UcoThing is the top-level class within UCO.
 */
export interface UcoThing  {
}

