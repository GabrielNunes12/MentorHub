---
name: design-patterns
description: Software design patterns principles and decision-making. Covers Creational, Structural, and Behavioral patterns (Gang of Four) and when to apply them.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Design Patterns

> Principles and decision-making for applying software design patterns.
> **Learn to THINK, not memorize implementations.**

---

## ⚠️ How to Use This Skill

This skill teaches **decision-making principles**, not just code snippets.

- **Don't force patterns**: Use them only when the problem *requires* the flexibility they provide.
- **KISS (Keep It Simple, Stupid)**: Simple code is better than a complex pattern if the complexity isn't justified.
- **Refactor to Patterns**: Often better to introduce a pattern *after* you see the duplication/pain point, not before.

---

## 1. Creational Patterns

> Dealing with object creation mechanisms.

### Decision Tree

```
Do you need to...
│
├── Ensure only one instance exists?
│   └── Singleton (Use sparingly!)
│
├── Create complex objects step-by-step?
│   └── Builder
│
├── Create families of related objects?
│   └── Abstract Factory
│
├── Let subclasses decide which class to instantiate?
│   └── Factory Method
│
└── Copy existing objects efficiently?
    └── Prototype
```

### Key Patterns

| Pattern | Best For | Warning |
|---------|----------|---------|
| **Factory Method** | decoupling creation logic from usage | Can lead to many subclasses |
| **Abstract Factory** | System independent of how products are created/composed | adding new products is hard (interface change) |
| **Builder** | Constructing complex objects, separate construction from representation | Overkill for simple objects |
| **Prototype** | Creating objects is expensive, just clone | Deep vs Shallow copy complexity |
| **Singleton** | Shared resources (logging, db connection) | Global state is hard to test. Consider Dependency Injection instead. |

---

## 2. Structural Patterns

> Dealing with object composition and structure.

### Decision Tree

```
Do you need to...
│
├── Make incompatible interfaces work together?
│   └── Adapter
│
├── Separate abstraction from implementation?
│   └── Bridge
│
├── Treat single object and groups uniformly?
│   └── Composite
│
├── Add responsibilities dynamically?
│   └── Decorator
│
├── Provide a simple interface to complex system?
│   └── Facade
│
└── Control access to an object?
    └── Proxy
```

### Key Patterns

| Pattern | Best For | Warning |
|---------|----------|---------|
| **Adapter** | Integrating legacy/third-party code | Don't adapt just to strictly match an interface if not needed |
| **Decorator** | Adding features (logging, auth) without inheritance | Can result in many small objects |
| **Facade** | Simplifying complex libraries/APIs | Facade can become a "God Object" |
| **Proxy** | Lazy loading, access control, logging | Can introduce latency |
| **Composite** | Tree structures (UI components, file systems) | Type safety can be tricky |
| **Bridge** | Cartesian product of complexities (e.g. OS x UI) | Increases complexity |
| **Flyweight** | Many identical small objects (text editor chars) | Optimization only. Adds complexity. |

---

## 3. Behavioral Patterns

> Dealing with communication between objects.

### Decision Tree

```
Do you need to...
│
├── Define a family of algorithms and switch them?
│   └── Strategy
│
├── Notify objects when state changes?
│   └── Observer
│
├── Encapsulate a request as an object?
│   └── Command
│
├── Traverse a collection without exposing internals?
│   └── Iterator
│
└── Define a skeleton of an algorithm?
    └── Template Method
```

### Key Patterns

| Pattern | Best For | Warning |
|---------|----------|---------|
| **Strategy** | Switching validation, sorting, payment methods at runtime | Clients must know difference between strategies |
| **Observer** | Event handling, UI updates on data change | Memory leaks (forgetting to unsubscribe) |
| **Command** | Undo/Redo, queuing operations | Can result in many small command classes |
| **State** | Object changes behavior when state changes | Logic can get scattered across state classes |
| **Template Method** | Invariant parts of algo in base, variant in subclasses | Inheritance coupling |
| **Chain of Responsibility** | Passing request along a chain (middleware) | Request might fall off the end unhandled |
| **Mediator** | Many-to-many object communication (Chat room) | Mediator becomes God Object |
| **Memento** | Undo/Redo mechanisms, snapshotting state | Memory usage high for large states |
| **Visitor** | Adding operations to stable object structures | Hard to change generic Element hierarchy |
| **Interpreter** | Parsing simple languages/grammars | Performance issues for complex grammars |

---

## 4. Modern Anti-Patterns to Avoid

- **God Object**: One class doing everything. -> **Refactor**: Split responsibilities (SRP).
- **Spaghetti Code**: Unstructured flow. -> **Refactor**: Strategy/State pattern.
- **Golden Hammer**: Using the same pattern for everything (e.g., Factories everywhere). -> **Refactor**: Simplify, remove unnecessary abstractions.
- **Poltergeists**: Classes with short lifespans/no state used just to invoke methods. -> **Refactor**: Merge into invoker or use static/functions.

---

## 5. Decision Checklist

Before applying a pattern:

- [ ] **Is there a real problem to solve?** (Flexibility, duplication, complexity)
- [ ] **Does a simple solution work?** (YAGNI principle)
- [ ] **Does the team understand the pattern?**
- [ ] **Does it make testing easier or harder?**
- [ ] **Are you fighting the language?** (e.g., using heavy Visitor pattern in a language with Pattern Matching)

---

> **Remember**: Patterns are a shared vocabulary for communicating solutions, not a checklist to implement blindly.
